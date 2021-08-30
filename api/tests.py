from django.test import TestCase, Client
from .views import search
import json
class TorreAppViewTest(TestCase):

    def setUp(self):
        self.c = Client()

    def test_api_search_response_ok(self):
        expect_code_response = 200
        response = self.c.post("/api/search/")
        self.assertEqual(response.status_code, expect_code_response)

    def is_json(myjson):
        try:
             json_object = json.loads(myjson)
        except ValueError as e:
            return False
        return True

    def test_search_view_response_json_ok(self):
        """
        search function return a JsonResponse when it does not found error
        """
        response = self.c.post("/api/search/")
        self.assertIn("data", response.json())

    def test_search_view_content_type_is_json(self):
        pass
    
    def test_search_view_json_error(self):
        pass

    def tearDown(self):
        pass
   
