from django.test import TestCase
from .views import search

class TorreAppViewTest(TestCase):

    def test_search_view_json_ok(self):
        """
        search function return a JsonResponse when it does not found error
        """
    def test_search_view_content_type_is_json(self):
        pass
    
    def test_search_view_json_error(self):
        pass
