# Python 401 Notes

## 7/8/19

* Basics:
  * pythonic: semantic python code
  * Docker containerization
  * basic React for front end JavaScript, HTML, and CSS
  * Django
  * python for data science
  * Resubmits are ok for 2 weeks or by beginning of final project week  

* Project 01 : Command line Greed | Day 01:
  * pipenv
  * list generator w/ random values: random.sample(xrange(1,7),6) -- look up: random value list generator python
  * dict? - to help keep game state
  
  MVP:
  Application should simulate rolling between 1 and 6 dice
    list w/ random generator
  Application should allow user to set aside dice each roll
    list slice, input
  Application should user to enter score per roll
    int input, += counter
  Application should allow “banking” current score or rolling again.
    string input, if statement
  Application should keep track of total score
    will need 2 diff variables: Turn score and total score: turn score gets added to total and cleared after banking. 
  Application should keep track of current round

* Rachel's Welcome!
  * 90% required to pass 
  * 90% attendance 
  * No assignments in project week 
  * Instructor approval required: Professionalism
  * PPH - " Your talk helped me decide that I would love to work at your company" 
  * Personal branding
    * Product: Who are you? 
      * Personality Test
        * Enegram
      * Gift vs. Insecurities 
      * self-awareness 
      * Deep Dive
      * Take Ownership: Mindful language and communication.  
      * Do the Work = Stay Awake
      * Emotional Intelligence 
    * Market Research 
    * Value Prop
      * Whats your Why
      * Know your Passion 
      * What Drives you? 
        * Sending my Cats to college. 
        * Libertine
      * for the rest of your life
        * Weird art
        * 
      * other than money!
        * Weird art
        * Community support
        * Libertine
      * Your impact: Vision and Mission
    * Elevator Pitch
      * The story of you
      * Your personal element 
      * show vulnerability 
      * Tie your past to your present 
      * Be authentic
    * Marketing Channels 
      * Online 
      * Professional
        * Start networking habits now
      * Personal
* snakes_cafe: 
  * """ - literal for multiline comment(string?)
  * f string == template literals: print(f'You ordered {order}')
* Code Challenge 01: Partner with Vin
  * Lists

## 7/9/19 - Modules and Testing

* mutability vs immutability
  * reassignment vs. true change
  * Immutable (reassignment): 
    * String
    * Numbers
    * Boolean 
    * tuple +(the frozen list)
  * Mutable (true change (change in memory)): 
    * Lists 
    * Dict 
* sequences are pythonic, not specific types
* code review: Enumerate(for loop) , Global(scope)
* PyTest: Unit Testing
  * production folder
  * test folder
    file in test folder needs to start with test_
  * TDD: Write your tests first: write code to meet testing
    * Red:Green:Refactor
  * Assert is native in python 
  * pipenv install pytest 
  * functions: test_
  * actual and expected, assert actual == expected
  * from file import function
  * __init__.py if having from and import module problems
  *** "return result or num" *** 
    * an empty string is considered falsie
    * short circuiting result.

## 7-10-19 - File IO and Exceptions 

*** realpython.com *** 
* Help(), print(dir()) 
* File IO 
  * open(file.txt)
  * file.read()
  * file.close() *** preferred with open(file) as file: *** 
    * Context Managers (with)
  * Try/Except blocks - be specific about the errors you are looking for. 
    * always happen, even if exception: Finally block  
    * as -- like Exception ex 

## 7-11-19 Classes and Recursion

* Recursion 
** Recursion 
*** Recursion 
**** Recursion 
    * "Do that for the rest of them" 
    * stack efficiency
* Pass - function body for when you do not have a function body yet
    * base case and recursive case
* Lab: 
  * custom class for ruleset
  * handle any exceptions 
* Classes
  * Object Oriented Programming(OOP)
  * class Person: 
  * new instance notation -- 
    * merry = person() 
    * note that we are leaving off a new key word. I have no idea why and think this is absurd. 
  * Constructor notation -- 
    * def __init__(self, other, useful, arguments): 
  ** self == this    
  * Method notation 
    * def greet(self) <--- needs self as a param
  * Inheritance notation(Polymorphism)  
    *InheritingClass(AncestorClass)
    *overwritten methods work the same way
  * super type notation = 
    * def greet(self): 
      * return super.greet(self)+ 'and I am awesome!'

## 7-12-19 

* LL Head should be None by default 
def__init__(self):
  self.head = None 
* Linked List class 
* value's 
* nodes have values
* values live in nodes
* create a Node Class
  def__init__(self, value): 
    self.value
    self.next
* to string 
  def __(str)__(self): 
    return 'your string'
* list comprehension 
  return [item.upper() for item in list if len(item) > 4] <-- filters for names longer than for and prints them to upper case

## 7-15-19 The Dreaded Port

* Pipfile goes in root, be sure to commit the pipfile and pipfile.lock
*** refactor linked list to be defensive ***
* Pytest skip 
  @pytest.mark.skip('reason why we are skipping') 
* Http-snacks
  * index.py
  * from http.server import baseHTTPRequestHandler, HTTPServer
  * extend baseHttprequesthalder   
  * server.serve_forever()
    except KeyboardInterrupt: 
    server.server_close()
    server.shutdown()
  * do_GET needs to be named as such
  * self.wfile.write(json_string.encode()) -- _SocketWriter
    * .encode() converts the string from "text" to bytes
    * when not using a type with the .encode on it, utilize json.dumps to reformat it to a string.
  * do_POST()
  * do_PUT() 
  * do_HEAD() 
  * do_DELETE()  
  * from urllib.parse import urlparse, parse_qs
  * import os 
  * import json
  * pathing: if parsed_path.path == '/pathimlookingfor' 
  * parse_qs(parsed_path.query) -- get the query string
  * write a json serialize method on your data class. 
    return vars(self) - serializes all attributes to dict
    call .serialize when adding objects to the list being handed to json.dumps
  * Conventional Import Order: Core Libraries, Third Party Libraries, Own Code  

## 7-16-19 Flask! 

*** Models for lab *** 
  * classes that help parse that data in distinct files
  * tottally forgot headder stuff 
    * self.send response 
    * send_headder(content-type, application/json) 
    *end headders 
  * parsed_qs.get('data')[0] 
  * @staticmethod - allows reference via dot notation
  self.latitude = info[geometry][location][lat]
  self.longitude = info[geometry][location][long]

  *** PRINT YOUR JSON AND URLs ***

* Flask!
  * A Minimal Application:
    Import Flask -- from flask import Flask, josnify, request
      Need to Install Flask

    app = Flask(__name__)

    @app.route('/thisistheroutedecorator')  
    def route_handler():
      return 'this is a route'

    @app.route('/jasonroute')
    def route_json():
      return jsonify(['json'])

    server:
      flask run
      set enviornment variables to development mode  

  * install flask-cors
    * CORS(app)

  * testing with mock data

## 7-17-19 Flask Models

*** serialize my json returns ***
def serialize(self):
  return vars(self)

* flask models: 
  ** __init__.py
  ** install falsk python-dotenv flask--sqlalchemy flask--migrate
  ** from flask import FLASK
  ** from flask__cors import CORS
  **
  ** app = Flask(__name__)
  ** CORS(app)
  ** config.py 
    import os 
    basedir = os.path.abspath(os.path.dirname(__file__))

    class Config(object): 
      SQLALCHMEY_DATABASE_URI = os.environ.get('DATABASE_URL')\
        or 'sqlite:///' + os.path.join(basedir, 'app.db')
  * mitigate circular dependencies by importing at the bottom -- WHY? 

  terminal command: flask db init 
  
  * DB Browser for sqlite: 
    allows you to navigate sql lite databases

## 7-18-19 Stacks & Queues

* Stacks and Queues: 
  * enqueue 
  * dequeue
  * FIFO - first in first out
  * push 
  * pop 
  * peek 
  * LIFO - first in last outs
  * pipenv --rm 
  * be weary of the built in queue and name accordingly
  class Q(LinkedList): -- is a linked list
  * return self.head and self.head.value 
    check that self.head is truthy and then return its value if self.head returned truthy

  * Composition: 
    def_init_(self):
      self.lst = LinkedList()  
  * Private and Protected 
    * Ask for forgiveness rather than permission: private and protected variables are entirely by convention. There is nothing actually stopping you. 
      * _private 
      * __protected

## 7-22-19 Intro to React

* Recursive Design Patterns
  * First, always identify a base case: the point at which you need to stop recursing.
  * Visitor - Things called after the recursive call can be hit on the recursion back up the stack. Pass variables you need with the recursive functions.
  * Driver Functions - Kick off the recursive function, maintain any external variables. In python you may need to use nonlocal, if your external variables are not defined in the scope of the recursive function. Stateful.
  * when possible, limit the external dependencies.
* Queue using 2 Stacks - Pseudo Queue challenge.  
  * Front stack
  * Back stack
* React!
  * Vanilla JS:
    * HTML: standard
    * event listeners, get element by id, prevent default
      * Click, Change
    * Massive dot chains (.split, .reverse, .join)
  * Jquery/handlebars: 
    *$'s, .on(event, method) 
    * needs to start up, init functions advisable.
  * React: 
    * runs as a node project, with a package JSON
    * Start with Create React App 
      * helps with package json
      * basic entry points and other set up for common react apps.
    * Extending in JS is like Inheritance
    * JSX - markup language  
    * onChange, onClick, onSubmit, ect. 
    *** NPM install ***
    * Needs to return something renderable
    * Export makes things avaliable
    * exporting/rendering multiple things: 
      a. put them all inside a div and return that. 
      b. now, we wrap in a React.Fragment, so that our html is semantic, like bosses.

        * you can also place {Fragment} in your import which allows you to just use a Fragment tag instead.

    * Component can be declared in an import just like fragment
    * Virtual dom comparisons to real dom allows for target changes/updates

    *** VIEW *** -- a different option for a framework that is opensource, does what react does, and is easier. Perhaps learn for CBC?

    * the only time you this.state is in a constructor, everywhere else you use this.setState
    * this.setState({words}) == this.setState({words:words})
    * Create React App: 
      * npm -g install create-react-app
      * create-react-app app-name

## 7-23-19 React: Props & State

* FIFO_Animal_Shelter
  * Node value - Animal Object with name, species, counter?

* React Props and State
  *** npm start ***
  * Focus on keeping components as simple as possible with all unique properties passed in
  * No longer need to chain superagent calls
    * mark function as async
    * mark super agent call with let data = await superagent.get('https://...');

  *   
