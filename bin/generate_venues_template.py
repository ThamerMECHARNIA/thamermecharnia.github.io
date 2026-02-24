#!/usr/bin/env python3

import os
import yaml
from collections import defaultdict

def extract_venues_from_bib(bib_file="_bibliography/papers.bib"):
    """Extract all unique venue abbreviations from the BibTeX file."""
    if not os.path.exists(bib_file):
        print(f"Error: {bib_file} not found")
        return {}
    
    try:
        from pybtex.database import parse_file
    except ImportError:
        print("Installing pybtex...")
        import subprocess
        subprocess.check_call(["pip3", "install", "-q", "pybtex"])
        from pybtex.database import parse_file
    
    venues = defaultdict(int)
    
    try:
        bib_data = parse_file(bib_file)
    except Exception as e:
        print(f"Error parsing {bib_file}: {e}")
        return {}
    
    for entry in bib_data.entries.values():
        # Try to get booktitle, journal, or series as venue indicator
        venue = None
        
        if 'booktitle' in entry.fields:
            venue = entry.fields['booktitle']
        elif 'journal' in entry.fields:
            venue = entry.fields['journal']
        elif 'series' in entry.fields:
            venue = entry.fields['series']
        
        if venue:
            # Extract abbreviation (usually in curly braces or between certain keywords)
            # For now, we'll use the full venue name as key if we can't extract abbreviation
            venues[venue] += 1
    
    return dict(venues)


def generate_venues_yaml(venues):
    """Generate a venues.yml template."""
    venues_data = {}
    
    for venue in sorted(venues.keys()):
        # Try to extract abbreviation from venue name
        # Common pattern: "Conference Name, ABBR 20XX" or "Journal Name (ABBR)"
        abbr = extract_abbreviation(venue)
        
        if abbr:
            venues_data[abbr] = {
                "url": "",  # Leave empty for user to fill
                "color": "#3498db"  # Default blue
            }
            print(f"  ✓ {abbr:15} ← {venue[:60]}")
    
    return venues_data


def extract_abbreviation(venue_str):
    """Try to extract abbreviation from venue string."""
    import re
    
    # Pattern 1: "Conference Name, ABBR YYYY"
    match = re.search(r',\s*([A-Z][A-Za-z0-9\-]*)\s+\d{4}', venue_str)
    if match:
        return match.group(1)
    
    # Pattern 2: "Conference Name (ABBR)"
    match = re.search(r'\(([A-Z][A-Za-z0-9\-]*)\)', venue_str)
    if match:
        return match.group(1)
    
    # Pattern 3: "ABBR YYYY" or "ABBR 20XX"
    match = re.search(r'\b([A-Z][A-Za-z0-9\-]{1,8})\s+\d{4}\b', venue_str)
    if match:
        abbr = match.group(1)
        if 2 <= len(abbr) <= 10:
            return abbr
    
    # Pattern 4: Multiple uppercase letters (consecutive)
    match = re.search(r'\b([A-Z]{2,6})\b', venue_str)
    if match:
        abbr = match.group(1)
        if 2 <= len(abbr) <= 6:
            return abbr
    
    # Pattern 5: Extract first letters of capitalized words
    words = re.findall(r'\b[A-Z][a-z]*', venue_str)
    if 2 <= len(words) <= 5:
        abbr = ''.join(w[0] for w in words)
        if 2 <= len(abbr) <= 8:
            return abbr
    
    return None


def save_venues_yaml(venues_data, output_file="_data/venues.yml"):
    """Save the generated venues data to YAML file."""
    with open(output_file, 'w', encoding='utf-8') as f:
        yaml.dump(venues_data, f, default_flow_style=False, allow_unicode=True, sort_keys=True)
    print(f"✅ Generated {output_file} with {len(venues_data)} venues")
    print("⚠️  Please fill in 'url' and 'color' (hex codes like #FF0000) for venues you want to highlight")


if __name__ == "__main__":
    print("🔍 Scanning papers.bib for venues...")
    venues = extract_venues_from_bib()
    
    if not venues:
        print("❌ No venues found")
        exit(1)
    
    print(f"✏️  Found {len(venues)} unique venues")
    venues_data = generate_venues_yaml(venues)
    
    if not venues_data:
        print("⚠️  No venue abbreviations could be extracted")
        exit(1)
    
    save_venues_yaml(venues_data)
