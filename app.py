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


# main homepage
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
                            animals=mongo.db.animals.find(),
                            diets=mongo.db.diets.find())


# insert animals using POST
@app.route("/insert_animal", methods=["POST"])
def insert_animal():
    animals = mongo.db.animals
    animals.insert_one(request.form.to_dict())
    return redirect(url_for("all_animals"))


# editing an animal
@app.route("/edit_animal/<animal_id>")
def edit_animal(animal_id):
    the_animal = mongo.db.animals.find_one({"_id": ObjectId(animal_id)})
    all_animal_types = mongo.db.types.find()
    all_diets = mongo.db.diets.find()
    return render_template("editanimal.html", animal=the_animal, 
                            types=all_animal_types, diets=all_diets)


# updating record
@app.route('/update_animal/<animal_id>', methods=["POST"])
def update_animal(animal_id):
    animals = mongo.db.animals
    animals.update({'_id': ObjectId(animal_id)},
    {
        'animal_name': request.form.get('animal_name'),
        'animal_type': request.form.get('animal_type'),
        'animal_scientific_name': request.form.get('animal_scientific_name'),
        'animal_diet': request.form.get('animal_diet'),
        'animal_avg_lifespan': request.form.get('animal_avg_lifespan'),
        'animal_size': request.form.get('animal_size'),
        'animal_weight': request.form.get('animal_weight'),
        'animal_image': request.form.get('animal_image'),
        'animal_species': request.form.get('animal_species')
    })
    return redirect(url_for('all_animals'))


# delete animals from database
@app.route("/delete_animal/<animal_id>")
def delete_animal(animal_id):
    mongo.db.animals.remove({"_id": ObjectId(animal_id)})
    return redirect(url_for("all_animals"))


if __name__ == "__main__":
    app.run(host=os.environ.get('IP'),
        port=int(os.environ.get('PORT')),
        debug=True)
