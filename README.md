# Realtime Chat App with Ruby on Rails

## Table of Contents
1. [Project Overview](#project-overview)
2. [Installation Instructions](#installation-instructions)
3. [Directory Structure](#directory-structure)
   
## Project Overview
### Description
The Rails Realtime Chat App is a web-based chat application built using Ruby on Rails. It allows users to interact with each other in real-time through a chat interface. The application leverages Action Cable for real-time features and uses a combination of modern web technologies to provide a seamless user experience.
### Key Features
1. User Authentication: Users can sign up, log in, and log out securely.
2. Real-time Messaging: Messages are broadcasted in real-time to all connected users using Action Cable.
3. Chat Interface: A user-friendly chat interface built with Semantic UI for styling.
4. Database Management: Uses SQLite3 for database management in development and test environments.
5. Error Handling: Custom error pages for 404, 422, and 500 errors.
### Technologies Used
1. Ruby on Rails: The primary framework for building the application.
2. Action Cable: For real-time WebSocket connections.
3. Semantic UI: For front-end styling.
4. SQLite3: Database management for development and testing.
5. Stimulus: A modest JavaScript framework for enhancing the user experience.
## Installation Instructions
### Prerequisites

- Ruby 3.0.0
- Rails 7.0.3
- PostgreSQL

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/username/rails-realtime-chat-app.git
    ```

2. Navigate to the project directory:
    ```sh
    cd rails-realtime-chat-app
    ```

3. Install the required dependencies:
    ```sh
    bundle install
    ```

4. Set up the database:
    ```sh
    rails db:setup
    ```

## Directory Structure
```
.
├── app
│   ├── assets
│   │   ├── config
│   │   │   └── manifest.js
│   │   └── stylesheets
│   │       └── application.css.scss
│   ├── channels
│   │   ├── application_cable
│   │   │   └── channel.rb
│   │   └── chatroom_channel.rb
│   ├── controllers
│   │   ├── application_controller.rb
│   │   ├── chatroom_controller.rb
│   │   └── messages_controller.rb
│   ├── helpers
│   │   └── application_helper.rb
│   ├── javascript
│   │   ├── application.js
│   │   ├── channels
│   │   │   ├── chatroom_channel.js
│   │   │   ├── consumer.js
│   │   │   └── index.js
│   │   └── controllers
│   │       ├── application.js
│   │       └── index.js
│   ├── mailers
│   │   └── application_mailer.rb
│   ├── models
│   │   ├── message.rb
│   │   └── user.rb
│   └── views
│       ├── chatroom
│       │   └── index.html.erb
│       ├── layouts
│       │   ├── _navbar.html.erb
│       │   ├── application.html.erb
│       │   ├── mailer.html.erb
│       │   └── mailer.text.erb
│       └── sessions
│           └── new.html.erb
├── config
│   ├── application.rb
│   ├── boot.rb
│   ├── cable.yml
│   ├── database.yml
│   ├── environment.rb
│   ├── environments
│   │   ├── development.rb
│   │   ├── production.rb
│   │   └── test.rb
│   ├── importmap.rb
│   ├── initializers
│   │   ├── assets.rb
│   │   └── content_security_policy.rb
│   ├── locales
│   │   └── en.yml
│   ├── puma.rb
│   └── routes.rb
├── db
│   ├── migrate
│   │   └── 20220729165710_create_users.rb
│   ├── schema.rb
│   └── seeds.rb
├── public
│   ├── 404.html
│   ├── 422.html
│   ├── 500.html
│   └── robots.txt
├── test
│   ├── application_system_test_case.rb
│   ├── channels
│   │   └── chatroom_channel_test.rb
│   ├── fixtures
│   │   ├── messages.yml
│   │   └── users.yml
│   ├── models
│   │   ├── message_test.rb
│   │   └── user_test.rb
│   └── test_helper.rb
├── .gitignore
├── .ruby-version
├── Gemfile
├── Gemfile.lock
├── Rakefile
└── README.md
```
