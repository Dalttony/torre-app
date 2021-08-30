from django.shortcuts import render
from django.http import HttpResponse, HttpRequest, JsonResponse
import json
import requests
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_protect

# Create your views here.
@require_http_methods(["POST"])
@csrf_protect
def search(request):
	headers = {"content-type":"application/json"}
	r = requests.post("https://search.torre.co/opportunities/_search/", headers=headers)
	#verify status of request 
	if not r:
		return JsonResponse({"error":404, "msm": "Not found"})
	try:
		data = json.loads(r.text)
		locations = []
		types = []
		periodicity = []
		for results in data["results"]:
			if len(results["locations"]) > 0:
				locations.append(results["locations"][0])

			if len(results["type"]) > 0:
				types.append(results["type"])

			if not results["compensation"]["data"] is None:
				periodicity.append(results["compensation"]["data"]["periodicity"])

		locations = list(set(locations))
		types = list(set(types))
		periodicity = list(set(periodicity))
		return JsonResponse({"filter": {
								"locations": locations,
								"types": types,
								"periodicity": periodicity
							}, 
							"data":data
							}, safe=False)
	except TypeError as e:
		return JsonResponse({"error": 1 , "msg": str(e)})
	
@require_http_methods(["GET"])
def users(request, username):
	url_request = "https://torre.bio/api/bios/{username}".format(username=username)
	r = requests.get(url_request)
	if not r:
		return JsonResponse({"error":404, "msm": "Not found"})
	try:
		data = json.loads(r.text)
		return JsonResponse({"data":data}, safe=False)
	except TypeError as e:
		return JsonResponse({"error": 1 , "msg": str(e)})

@require_http_methods(["GET"])
def jobs(request, id):
	url_request = "https://torre.co/api/opportunities/{id}".format(id=id)
	r = requests.get(url_request)
	if r.status_code == 404:
		return JsonResponse({"error":404, "msg":str(r.content)})
	return HttpResponse(r.content)