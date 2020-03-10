describe("Animal Adventures", function(){

    /*
        Text Input
    */

    // User text input = animal in database
   describe("User input should give correct results", function(){
       it("should return 'Result' for user input Elephant", function(){
            var result = animalExists("Elephant");
            expect (result).toBe("Result");
       });
       it("should return 'Result' for user input Giraffe", function(){
            var result = animalExists("Giraffe");
            expect (result).toBe("Result");
       });
       it("should return 'Result' for user input Toad", function(){
            var result = animalExists("Toad");
            expect (result).toBe("Result");
       });
       it("should return 'Result' for user input Penguin", function(){
            var result = animalExists("Penguin");
            expect (result).toBe("Result");
       });
       it("should return 'Result' for user input Fish", function(){
            var result = animalExists("Fish");
            expect (result).toBe("Result");
       });
       it("should return 'Result' for user input Butterfly", function(){
            var result = animalExists("Butterfly");
            expect (result).toBe("Result");
       });
       it("should return 'Result' for user input Tiger", function(){
            var result = animalExists("Tiger");
            expect (result).toBe("Result");
       });
       it("should return 'Result' for user input Panda", function(){
            var result = animalExists("Panda");
            expect (result).toBe("Result");
       });
       it("should return 'Result' for user input Praying Mantis", function(){
            var result = animalExists("Praying Mantis");
            expect (result).toBe("Result");
       });
   });

   // User text input = NO animal in database
   describe("User input e.g. pig", function(){
       it("should return 'No Result' for user input pig", function(){
            var noResult = noSearchAnimal("pig");
            expect(noResult).toBe("No Result");
       });
    });


    /*
        Select Animal Types
    */
    
    // User selects animal type e.g. Mammals - all mammals should show
    describe("Selected animal type in View Animals page", function(){
        it("should return Amphibians if user selects Amphibians and they all show", function(){
            var selected = animalType("Amphibians");
            expect(selected).toBe("Amphibians");
        });
        it("should return Birds if user selects Birds and they all show", function(){
                var selected = animalType("Birds");
                expect(selected).toBe("Birds");
        });
            it("should return Fish if user selects Fish and they all show", function(){
                var selected = animalType("Fish");
                expect(selected).toBe("Fish");
        });
        it("should return Invertebrates if user selects Invertebrates and they all show", function(){
                var selected = animalType("Invertebrates");
                expect(selected).toBe("Invertebrates");
        });
        it("should return Mammals if user selects Mammals and they all show", function(){
                var selected = animalType("Mammals");
                expect(selected).toBe("Mammals");
        });
        it("should return Reptiles if user selects Reptiles and they all show", function(){
                var selected = animalType("Reptiles");
                expect(selected).toBe("Reptiles");
        });
    });


    /*
        Edit Animals
    */
    
    // User presses Edit on an animal
    describe("Edit button clicked", function(){
        it("should bring users into the update page containing animals information", function(){
            var edit = editClicked("clicked");
            expect(edit).toBe("clicked");
        });
    });


    /*
        Delete Animals
    */
    
    // User presses Delete on an animal
    describe("Delete button clicked", function(){
        it("should delete animal from database", function(){
            var deleteBtn = deleteClicked("Deleted");
            expect(deleteBtn).toBe("Deleted");
        });
    });

});