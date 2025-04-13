from typing import List, Tuple
import requests

def get_word_list(word_length) -> List[str]:
    url = "https://raw.githubusercontent.com/OpenTaal/opentaal-wordlist/refs/heads/master/wordlist.txt"
    response = requests.get(url)

    if response.status_code != 200:
        print("Failed to fetch wordlist")
        exit(1)

    words = response.text.splitlines()
    return [word for word in words if len(word) == word_length and word.isalpha()]

def calc_letter_frequency(word_list: List[str]) -> dict:
    frequency = {}
    for word in word_list:
        for letter in set(word):
            frequency[letter] = frequency.get(letter, 0) + 1
    return frequency

def calc_position_letter_frequency(word_list: List[str]) -> dict:
    position_frequency = {}
    for word in word_list:
        for i, letter in enumerate(word):
            if letter not in position_frequency:
                position_frequency[letter] = [0] * len(word)
            position_frequency[letter][i] += 1
    return position_frequency

def calc_best_guess(word_list: List[str], letter_frequency: dict, position_letter_frequency: dict) -> str:
    best_word = ""
    best_score = 0

    for word in word_list:
        score = sum(letter_frequency.get(letter, 0) for letter in set(word))

        for i, letter in enumerate(word):
            score += position_letter_frequency.get(letter, [0] * len(word))[i]

        if score > best_score:
            best_score = score
            best_word = word

    return best_word

def filter_word_list(word_list: List[str], guess: str, feedback: str) -> List[str]:
    filtered_list = []
    for word in word_list:
        match = True
        for guessed_letter, letter, score in zip(guess, word, feedback):
            if score == "g" and guessed_letter != letter:
                match = False
                break
            elif score == "y" and (guessed_letter == letter or guessed_letter not in word):
                match = False
                break
            elif score == "b" and guessed_letter in word:
                match = False
                break
        if match:
            filtered_list.append(word)
    return filtered_list

def play_game(word_length: int, rounds: int = 6) -> None:
    word_list = get_word_list(word_length)
    letter_frequency = calc_letter_frequency(word_list)
    position_letter_frequency = calc_position_letter_frequency(word_list)

    for round in range(rounds):
        letter_frequency = calc_letter_frequency(word_list)
        position_letter_frequency = calc_position_letter_frequency(word_list)

        guess = calc_best_guess(word_list, letter_frequency, position_letter_frequency)

        print(f"Best guess: {guess}")

        feedback = input("Enter feedback (g for green, y for yellow, b for black): ").strip()

        while len(feedback) != word_length or any(c not in "gyb" for c in feedback):
            feedback = input(f"Invalid feedback. Please enter feedback for {word_length} letters (g for green, y for yellow, b for black): ").strip()

        if feedback == "g" * word_length:
            print("Congratulations! You've guessed the word!")
            break

        word_list = filter_word_list(word_list, guess, feedback)
        if not word_list:
            print("No more words left to guess.")
            break

if __name__ == "__main__":
    word_length = 5
    word_list = get_word_list(word_length)
    letter_frequency = calc_letter_frequency(word_list)
    position_letter_frequency = calc_position_letter_frequency(word_list)

    play_game(word_length, rounds=6)