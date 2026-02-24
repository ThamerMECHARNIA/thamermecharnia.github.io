#!/usr/bin/env python3

import os
import yaml
from collections import defaultdict
from unidecode import unidecode

def extract_authors_from_bib(bib_file="_bibliography/papers.bib"):
    """Extract all unique authors from the BibTeX file."""
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
    
    authors = defaultdict(set)
    
    try:
        bib_data = parse_file(bib_file)
    except Exception as e:
        print(f"Error parsing {bib_file}: {e}")
        return {}
    
    for entry in bib_data.entries.values():
        if 'author' in entry.persons:
            for person in entry.persons['author']:
                # Get last name and first name
                last_names = person.last_names
                first_names = person.first_names
                
                if last_names:
                    last_name = " ".join(last_names)
                    first_name = " ".join(first_names) if first_names else ""
                    
                    # Skip yourself
                    if last_name.lower() != "mecharnia":
                        # Normalize: lowercase, remove accents
                        last_name_key = unidecode(last_name).lower()
                        authors[last_name_key].add((last_name, first_name))
    
    return dict(authors)


def generate_coauthors_yaml(authors):
    """Generate a coauthors.yml template."""
    coauthors_data = {}
    
    for last_name_key in sorted(authors.keys()):
        author_variations = sorted(authors[last_name_key])
        firstname_list = []
        
        for last_name, first_name in author_variations:
            if first_name:
                firstname_list.append(first_name)
        
        # Remove duplicates, keep first occurrence
        firstname_list = list(dict.fromkeys(firstname_list))
        
        coauthors_data[last_name_key] = [
            {
                "firstname": firstname_list if firstname_list else [""],
                "url": ""  # Leave empty for user to fill
            }
        ]
    
    return coauthors_data


def save_coauthors_yaml(coauthors_data, output_file="_data/coauthors.yml"):
    """Save the generated coauthors data to YAML file."""
    with open(output_file, 'w', encoding='utf-8') as f:
        yaml.dump(coauthors_data, f, default_flow_style=False, allow_unicode=True, sort_keys=True)
    print(f"✅ Generated {output_file} with {len(coauthors_data)} coauthors")
    print("⚠️  Please fill in the 'url' fields for coauthors you want to link to")


if __name__ == "__main__":
    print("🔍 Scanning papers.bib for coauthors...")
    authors = extract_authors_from_bib()
    
    if not authors:
        print("❌ No coauthors found")
        exit(1)
    
    print(f"✏️  Found {len(authors)} unique coauthors")
    coauthors_data = generate_coauthors_yaml(authors)
    save_coauthors_yaml(coauthors_data)
