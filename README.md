# Bangalore House Price Prediction

## Description
This repository contains a machine learning project for predicting house prices in Bangalore. It includes data preprocessing, exploratory data analysis, feature engineering, model training, and web application for user interface. The project leverages various regression techniques to provide accurate price predictions based on multiple features such as location, total square feet, number of BHK, and more. The website allows users to input property details and receive an estimated market price.

## Project Structure
- `.idea/` - Project configuration files for IDE
- `Client/` - Frontend code using html,css and java script for the web application
- `Model/` - Jupiter notebook of machine learning model and related python code
- `Server/` - Backend server code for the web application using python
- `requirements.txt` - List of dependencies
- `Webpage.png` - Screenshot of the designed web application

## Installation
Install the required dependenciesr using [pip](https://pip.pypa.io/en/stable/).
```bash
pip install -r requirements.txt
```

## Dataset:
Dataset is collected from kaggle.
Link: [https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data).


## Usage
Run the server:
```bash
python server.py
```
Open app.html on your web browser and enter the property details to get the predicted house price.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
