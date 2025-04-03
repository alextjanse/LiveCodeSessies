class Node:
    def __init__(self, statement, end_state = False):
        self.statement = statement
        self.options = dict()
        self.answer = None
        self.end_state = end_state
    
    def add_option(self, option, next_question):
        self.options[option] = next_question

    def transition(self):
        if len(self.options) == 0:
            raise Exception("no options")
        
        print(f'Q: {self.statement}')
        
        index_map = dict()

        for i, option in enumerate(self.options):
            print(f'{i}: {option}')
            index_map[i] = option

        answer = input()
        while not (answer.isnumeric() and 0 <= int(answer) < len(self.options)):
            answer = input('Incorrect antwoord; geef alleen de index van het antwoord.')

        return self.options[index_map[int(answer)]]


q1 = Node('Waar heb je hulp bij nodig?')
q2 = Node('Is het een probleem met Laravel?')
q3 = Node('Welk framework gebruik je?')
q4 = Node('Is Karen vandaag aanwezig?')
q5 = Node('Kan je vraag niet even wachten?')

q1.add_option('Back-end', q2)
q1.add_option('Front-end', q3)
q1.add_option('Data', q4)

q2.add_option('ja', Node('Oei, dan moet je bij Paul zijn.', True))
q2.add_option('nee', Node('Mooi, dan is het zo opgelost.', True))
q2.add_option('Ga terug', q1)

q3.add_option('React', Node('Zorg dat je de documentatie goed hebt gelezen.', True))
q3.add_option('Vue', Node('Als ik jou was zou ik overstappen op React', True))
q3.add_option('Angular', Node('Ieuw.', True))
q3.add_option('Ga terug', q1)

q4.add_option('ja', Node('Vraag het haar maar even', True))
q4.add_option('nee', q5)
q4.add_option('Ga terug', q1)

q5.add_option('ja', Node('Stel hem morgen/volgende week maar opnieuw.', True))
q5.add_option('nee', Node('Nicky kan je vast ook helpen.', True))
q5.add_option('Ga terug', q4)

current_question = q1

while (not current_question.end_state):
    current_question = current_question.transition()

print(current_question.statement)

print('Bedankt voor het gebruiken van de AI coach service!')