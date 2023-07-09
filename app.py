# coding: utf-8
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/form.html')
def form():
	return render_template('form.html')

@app.route('/form-check.html', methods=['POST'])
def form_post():
    context = {'form': request.form}
    print(context.get('form').get('email'))
    return render_template(
            'form-check.html',
            context=context)

@app.route('/form-result.html', methods=['POST'])
def form_check():
    context = {'form': request.form}
    print(context)
    return render_template(
            'form-result.html',
            context=context)

# @app.route('/form-result.html', methods=['POST'])
# def form_result():
#     return render_template('form-result.html')

if __name__ == '__main__':
	app.run()

