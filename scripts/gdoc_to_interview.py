# Convert a .html file exported from Google Docs to our interview page.

# Usage example:
#     python scripts/gdoc_to_interview.py "/home/sanqui/Downloads/RedaktorovanrozhovoruLuborKopeck.docx.html" RS LK | wl-copy

import sys
import zipfile

from bs4 import BeautifulSoup
from bs4.element import Tag

filepath = sys.argv[1]
q_name = sys.argv[2]
a_name = sys.argv[3]


if filepath.endswith(".zip"):
    with zipfile.ZipFile(filepath, 'r') as zip_ref:
        zip_filename = list(filter(lambda name: name.endswith('.html'), zip_ref.namelist()))[0]
        with zip_ref.open(zip_filename) as f:
            soup = BeautifulSoup(f, 'html.parser')
else:
    with open(filepath, 'r') as f:
        soup = BeautifulSoup(f, 'html.parser')

skipped_paragraphs = []

body_tags: list[Tag] = soup.find('body').children
chapter_open = False
for tag in body_tags:
    if tag.name == 'h3':
        chapter_name = tag.text
        if chapter_open:
            print("</Chapter>")
        print(f"<Chapter title=\"{chapter_name}\">")
        print()
        chapter_open = True
    else:
        span_tags: list[Tag] = tag.find_all('span')
        if not span_tags:
            continue
        first_span = span_tags[0]
        text = first_span.text.rstrip(":  ").strip()
        if text == q_name:
            tag_name = "Q"
        elif text == a_name:
            tag_name = "A"
        else:
            #print(f"Warning: Skipping paragraph {p}")
            #print()
            skipped_paragraphs.append(tag)
            continue

        speaker = text

        first_span.decompose()

        span_tags[1].replace_with(span_tags[1].text.lstrip(":  "))

        p_text = str(tag.decode_contents())

        print(f"""
    <{tag_name} speaker="{speaker}">{p_text}</{tag_name}>
    """)


if chapter_open:
    print("</Chapter>")

print("WARNING: SKIPPED PARAGRAPHS:", file=sys.stderr)
for tag in skipped_paragraphs:
    print(str(tag), file=sys.stderr)

#with open(filepath, 'w') as f:
#    f.write(str(soup))

