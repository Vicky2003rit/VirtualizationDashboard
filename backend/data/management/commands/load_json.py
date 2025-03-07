import json
from datetime import datetime  # Import datetime module to parse the date
from django.core.management.base import BaseCommand
from data.models import Data

class Command(BaseCommand):
    help = 'Load data from a JSON file into the database'

    def handle(self, *args, **kwargs):
        try:
            with open(r'C:\Users\GNANAGURU VIGNESH J\Desktop\django-react - Copy\backend\Data.json', 'r', encoding='utf-8') as f:
                data = json.load(f)
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error loading JSON: {e}"))
            return

        for item in data:
            # Parse 'added' and 'published' fields to proper DateTime format
            added = self.parse_date(item.get('added'))
            published = self.parse_date(item.get('published'))

            try:
                # Create and save the Data object
                Data.objects.create(
                    end_year=item.get('end_year'),
                    intensity=item.get('intensity'),
                    sector=item.get('sector'),
                    topic=item.get('topic'),
                    insight=item.get('insight'),
                    url=item.get('url'),
                    region=item.get('region'),
                    start_year=item.get('start_year'),
                    impact=item.get('impact'),
                    added=added,  # Parsed DateTime
                    published=published,  # Parsed DateTime
                    country=item.get('country'),
                    relevance=item.get('relevance'),
                    pestle=item.get('pestle'),
                    source=item.get('source'),
                    title=item.get('title'),
                    likelihood=item.get('likelihood')
                )
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"Error inserting record: {e}"))
                continue

        self.stdout.write(self.style.SUCCESS('Successfully loaded data from JSON file.'))

    def parse_date(self, date_str):
        """Parse date string in custom format to standard datetime."""
        if date_str:
            try:
                return datetime.strptime(date_str, '%B, %d %Y %H:%M:%S')
            except ValueError:
                self.stdout.write(self.style.ERROR(f"Error parsing date: {date_str}"))
        return None  # Return None if date_str is empty or invalid
