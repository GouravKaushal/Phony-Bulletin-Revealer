
import pickle
from flask import Flask, render_template, make_response, request
#function to run for prediction
app = Flask(__name__)



@app.route('/script', methods = ['GET'])
def detecting_fake_news():
	var= request.get_json()['message'];
	print(var)
	load_model = pickle.load(open('final_model.sav', 'rb'))
	prediction = load_model.predict([var])
	prob = load_model.predict_proba([var])
	return "The probability of the string to become the news will be:"+str(prob[0][1])
@app.route('/')
def home():
	print("Gitanjali");
	return "Fake News detector is on"
if __name__ == "__main__":
	app.run(debug=True)
