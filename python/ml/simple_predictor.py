import numpy as np
from sklearn.linear_model import LinearRegression

def predict_next(sequence):
    X = np.array(sequence[:-1]).reshape(-1, 1)
    y = np.array(sequence[1:])
    model = LinearRegression().fit(X, y)
    return model.predict([[sequence[-1]]])[0]

if __name__ == "__main__":
    sequence = [1, 3, 5, 7, 9]
    next_val = predict_next(sequence)
    print(f"Next predicted value: {next_val}")