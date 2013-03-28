App = Ember.Application.create({});

App.Router.map(function() {
  this.route("restraunts", { path: "/" });
});

App.RestrauntsController = Ember.ArrayController.extend({
  content: [],

  findRestraunt: function() {
    this.setEach("winner", false)
    abc = this.rejectProperty('winner')
    if (abc.length > 0) {
      entry = abc[Math.floor(Math.random()*abc.length)]
      entry.set('winner', true)
      this.get('store').commit()
    }
  }
});

App.RestrauntsRoute = Ember.Route.extend({
  model: function() {
    return App.Restraunt.find()
  }
});

App.Restraunt = DS.Model.extend({
  name: DS.attr('string'),
  winner: DS.attr('boolean')
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Restraunt.FIXTURES = [
  { id: 1, name: "Mcalisters", winner: false },
  { id: 2, name: "Stanley's BBQ", winner: false },
  { id: 3, name: "Taco Bueno", winner: false },
  { id: 4, name: "BJ's", winner: false },
  { id: 5, name: "Chick-Fil-A", winner: false },
  { id: 6, name: "Jersey Mikes", winner: false },
  { id: 7, name: "Jimmy Johns", winner: false },
  { id: 8, name: "Fuzzys", winner: false },
  { id: 9, name: "Tacos y Mas (authentic mexican)", winner: false },
  { id: 10, name: "Don Juans", winner: false },
  { id: 11, name: "Basil Thai", winner: false },
  { id: 12, name: "China King", winner: false },
  { id: 13, name: "Tuscani", winner: false },
  { id: 14, name: "What About Kabob", winner: false },
  { id: 15, name: "Jakes for Burgers", winner: false },
  { id: 16, name: "Mama's (breakfest food)", winner: false }
]