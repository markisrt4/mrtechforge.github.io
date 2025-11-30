#!/usr/bin/env python3
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    print("This script needs PyYAML. Install with: pip install pyyaml")
    sys.exit(1)

NAV_PATH = Path("_data/navigation.yml")


def main():
    if not NAV_PATH.exists():
        print(f"ERROR: {NAV_PATH} not found")
        sys.exit(1)

    with NAV_PATH.open("r", encoding="utf-8") as f:
        try:
            data = yaml.safe_load(f)
        except yaml.YAMLError as e:
            print("ERROR: YAML parse failure:")
            print(e)
            sys.exit(1)

    if "main" not in data or not isinstance(data["main"], list):
        print("ERROR: navigation.yml must contain 'main' as a list.")
        sys.exit(1)

    problems = []
    for i, item in enumerate(data["main"]):
        check_nav_item(item, f"main[{i}]", problems)

    if problems:
        print("Found navigation issues:")
        for p in problems:
            print(" -", p)
        sys.exit(1)
    else:
        print("navigation.yml looks structurally valid ✨")


def check_nav_item(item, prefix, problems):
    if not isinstance(item, dict):
        problems.append(f"{prefix}: item is not a mapping/dict")
        return

    title = item.get("title")
    url = item.get("url")

    if not title:
        problems.append(f"{prefix}: missing 'title'")
    if url is None:
        problems.append(f"{prefix} ('{title or '?'}'): missing 'url'")
    elif not isinstance(url, str):
        problems.append(f"{prefix} ('{title or '?'}'): url is not a string")
    elif url and not url.startswith("/"):
        problems.append(
            f"{prefix} ('{title or '?'}'): url '{url}' does not start with '/'"
        )

    children = item.get("children")
    if children is not None:
        if not isinstance(children, list):
            problems.append(f"{prefix} ('{title or '?'}'): 'children' is not a list")
        else:
            for j, child in enumerate(children):
                check_nav_item(child, f"{prefix}.children[{j}]", problems)


if __name__ == "__main__":
    main()