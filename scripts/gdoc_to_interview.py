# Convert a .html file exported from Google Docs to our interview page.

import sys
from bs4 import BeautifulSoup
from bs4.element import Tag

filepath = sys.argv[1]
q_name = sys.argv[2]
a_name = sys.argv[3]

skipped_paragraphs = []


with open(filepath, 'r') as f:
    soup = BeautifulSoup(f, 'html.parser')

p_tags: list[Tag] = soup.find_all('p')
for p in p_tags:
    span_tags: list[Tag] = p.find_all('span')
    if not span_tags:
        continue
    first_span = span_tags[0]
    text =first_span.text.rstrip(": ").strip()
    if text == q_name:
        tag_name = "Q"
    elif text == a_name:
        tag_name = "A"
    else:
        #print(f"Warning: Skipping paragraph {p}")
        #print()
        skipped_paragraphs.append(p)
        continue

    speaker = text

    first_span.decompose()

    p_text = str(p.decode_contents())

    print(f"""
<{tag_name} speaker="{speaker}">{p_text}</{tag_name}>
""")
        

print("WARNING: SKIPPED PARAGRAPHS:", file=sys.stderr)
for p in skipped_paragraphs:
    print(str(p), file=sys.stderr)

#with open(filepath, 'w') as f:
#    f.write(str(soup))

