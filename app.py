import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
if os.path.exists("env.py"):
    import env

app = Flask(__name__)
app.config["MONGODB_NAME"] = os.environ.get('MONGODB_NAME')
app.config["MONGO_URI"] = os.environ.get('MONGO_URI')
mongo = PyMongo(app)

DBS_NAME = "animal_facts"


'''
mammals = mongo.db.animals.find({"animal_type": "Mammals"})
birds = mongo.db.animals.find({"animal_type": "Birds"})
reptiles = mongo.db.animals.find({"animal_type": "Reptiles"})
amphibians = mongo.db.animals.find({"animal_type": "Amphibians"})
fish = mongo.db.animals.find({"animal_type": "Fish"})
invertebrates = mongo.db.animals.find({"animal_type": "Invertebrates"})
'''


# Main homepage
@app.route("/")
@app.route("/all_animals")
def all_animals():
    animals = mongo.db.animals.find().sort([("animal_type", 1), ("animal_name", 1)])
    return render_template("allanimals.html", animals=list(animals))


# testing piece of code
@app.route("/testing")
def testing():
    return render_template("testing.html")


# adding animals
@app.route("/add_animals")
def add_animals():
    return render_template("addanimal.html", 
                            types=mongo.db.types.find(),
                            animals=mongo.db.animals.find())


# insert animals using POST
@app.route("/insert_animal", methods=["POST"])
def insert_animal():
    animals = mongo.db.animals
    animals.insert_one(request.form.to_dict())
    return redirect(url_for("all_animals"))


# delete animals from database
@app.route("/delete_animal/<animals_id>")
def delete_animal(animals_id):
    mongo.db.animals.remove({"_id": ObjectId(animals_id)})
    return redirect(url_for("all_animals"))


if __name__ == "__main__":
    app.run(host=os.environ.get('IP'),
        port=int(os.environ.get('PORT')),
        debug=True)
