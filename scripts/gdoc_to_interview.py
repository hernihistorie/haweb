# Convert a .html file exported from Google Docs to our interview page.

# Usage example:
#     python scripts/gdoc_to_interview.py "/home/sanqui/Downloads/RedaktorovanrozhovoruLuborKopeck.docx.html" RS LK | wl-copy

import sys
from urllib import parse
import zipfile

from bs4 import BeautifulSoup
from bs4.element import Tag

filepath = sys.argv[1]
a_name = sys.argv[2]
q_names = sys.argv[3:]


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
        if text == a_name:
            tag_name = "A"
        elif text in q_names:
            tag_name = "Q"
        else:
            #print(f"Warning: Skipping paragraph {p}")
            #print()
            skipped_paragraphs.append(tag)
            continue

        speaker = text

        first_span.decompose()

        span_tags[1].replace_with(span_tags[1].text.lstrip(":  "))

        a_tags: list[Tag] = tag.find_all('a')
        for a_tag in a_tags:
            href = a_tag.get('href')
            if href.startswith("#"):
                continue
            assert href.startswith('https://www.google.com/url?'), href
            # https://www.google.com/url?q=https://cs.wikipedia.org/wiki/Intel_80386&sa=D&source=editors&ust=1723386333606518&usg=AOvVaw2D6ohO13sB_Ku5-DV0ltXM
            url = parse.urlparse(href)
            query = parse.parse_qs(url.query)
            for k, v in query.items():
                if k == 'q':
                    a_tag['href'] = v[0]


        p_text = str(tag.decode_contents())

        print(f"""
    <{tag_name} speaker={{{speaker}}}>{p_text}</{tag_name}>""")


if chapter_open:
    print("</Chapter>")

print("WARNING: SKIPPED PARAGRAPHS:", file=sys.stderr)
for tag in skipped_paragraphs:
    print(str(tag), file=sys.stderr)

#with open(filepath, 'w') as f:
#    f.write(str(soup))

