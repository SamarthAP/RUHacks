# RUHacks

What it Does

BiLLy is a bill managing system to help track and record purchases quickly and efficiently. The user is simply required to take a picture of their receipt and upload it onto our web application which then shows the total of their purchase. Each user also requires their own username and password to keep their profiles unique. This application not only displays a summary of the current uploaded receipt, but also shows a history of all the previous uploads to keep a record of all the user’s spending.

How we built it:

We have a MERN stack which covers our backend and frontend. The project is node based, we use MongoDb to store our billing information in JSON form. The API endpoints are set up in Express.js and the frontend utilizes React's component based structure. We built several endpoints which provide us essential functionality such as retreiving a list of bills, calling the Google Vision OCR Engine, and adding bills to an associated user. One of the primary challenges we solved was gaining the ability to make requests from a different port on the localhost from React. The user interface was initially crafted in HTML using basic CSS styling, and was later converted into JSX code in the components. 

Whats next for BiLLy – the Bill Managing Web Application

The next steps to further increase the functionality of our application is to incorporate a statistics tab to display all of the user’s purchases in a graph, providing a visual of spendings over time. We would also like to improve our logical deduction to allow us to filter the Google Vision OCR Engine results for a larger variety of receipts. As constructed, we make several assumptions for the program to spit out the correct results. Moving forward, we would like to work out these bugs.