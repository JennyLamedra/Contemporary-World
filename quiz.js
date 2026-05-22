// Quiz Questions Database
const quizDatabase = {
    'international-law': [
        {
            type: 'multiple-choice',
            question: 'What is the primary source of international law?',
            options: ['Treaties and conventions', 'Domestic legislation', 'Corporate policies', 'Religious texts'],
            correct: 0
        },
        {
            type: 'multiple-choice',
            question: 'Which organization is primarily responsible for maintaining international peace and security?',
            options: ['World Bank', 'United Nations', 'International Monetary Fund', 'World Trade Organization'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What international court settles disputes between nations? (Abbreviation: ICJ)',
            correct: ['International Court of Justice', 'ICJ', 'international court of justice']
        },
        {
            type: 'multiple-choice',
            question: 'What principle states that a state has complete authority within its territory?',
            options: ['Sovereignty', 'Democracy', 'Federalism', 'Autonomy'],
            correct: 0
        },
        {
            type: 'multiple-choice',
            question: 'Which of the following is NOT a source of international law?',
            options: ['International customs', 'General principles of law', 'National constitutions', 'Judicial decisions'],
            correct: 2
        },
        {
            type: 'identification',
            question: 'What term describes agreements between two or more nations?',
            correct: ['treaty', 'treaties', 'international treaty', 'international agreement']
        },
        {
            type: 'multiple-choice',
            question: 'What is jus cogens in international law?',
            options: ['Peremptory norms that cannot be violated', 'Optional guidelines', 'Trade agreements', 'Military alliances'],
            correct: 0
        },
        {
            type: 'multiple-choice',
            question: 'Which principle allows states to prosecute crimes regardless of where they occurred?',
            options: ['Territorial jurisdiction', 'Universal jurisdiction', 'Personal jurisdiction', 'Subject matter jurisdiction'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What is the term for customary practices accepted as law?',
            correct: ['customary international law', 'custom', 'international custom', 'customary law']
        },
        {
            type: 'multiple-choice',
            question: 'What does the principle of "pacta sunt servanda" mean?',
            options: ['Agreements must be kept', 'War is justified', 'States are equal', 'Laws are supreme'],
            correct: 0
        },
        {
            type: 'multiple-choice',
            question: 'Which body of the UN can authorize the use of force?',
            options: ['General Assembly', 'Security Council', 'Economic and Social Council', 'Secretariat'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What international agreement aims to protect human rights globally? (Abbreviation: UDHR)',
            correct: ['Universal Declaration of Human Rights', 'UDHR', 'universal declaration of human rights']
        }
    ],
    'world-regions': [
        {
            type: 'multiple-choice',
            question: 'What is a regional bloc?',
            options: ['A group of countries with shared interests', 'A single nation', 'A city-state', 'A corporate alliance'],
            correct: 0
        },
        {
            type: 'multiple-choice',
            question: 'Which organization represents European integration?',
            options: ['NAFTA', 'European Union', 'ASEAN', 'OPEC'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What does ASEAN stand for?',
            correct: ['Association of Southeast Asian Nations', 'ASEAN', 'association of southeast asian nations']
        },
        {
            type: 'multiple-choice',
            question: 'What is the primary goal of regional blocs?',
            options: ['Military conquest', 'Economic cooperation', 'Cultural isolation', 'Religious unity'],
            correct: 1
        },
        {
            type: 'multiple-choice',
            question: 'Which regional organization includes the United States, Canada, and Mexico?',
            options: ['EU', 'USMCA', 'ASEAN', 'AU'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What African organization promotes unity among African states? (Abbreviation: AU)',
            correct: ['African Union', 'AU', 'african union']
        },
        {
            type: 'multiple-choice',
            question: 'What is the main benefit of regional integration?',
            options: ['Increased trade barriers', 'Reduced cooperation', 'Enhanced economic growth', 'Political isolation'],
            correct: 2
        },
        {
            type: 'multiple-choice',
            question: 'Which South American bloc promotes regional integration?',
            options: ['NAFTA', 'EU', 'Mercosur', 'OPEC'],
            correct: 2
        },
        {
            type: 'identification',
            question: 'What currency is used by most European Union countries?',
            correct: ['Euro', 'euro', 'EUR']
        },
        {
            type: 'multiple-choice',
            question: 'What does regionalism promote?',
            options: ['Global isolation', 'Cooperation among neighboring countries', 'Military conflict', 'Economic sanctions'],
            correct: 1
        },
        {
            type: 'multiple-choice',
            question: 'Which organization focuses on oil-producing countries?',
            options: ['WTO', 'OPEC', 'IMF', 'World Bank'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What agreement replaced NAFTA in 2020?',
            correct: ['USMCA', 'United States-Mexico-Canada Agreement', 'usmca']
        }
    ],
    'globalization-structure': [
        {
            type: 'multiple-choice',
            question: 'What is globalization?',
            options: ['Isolation of nations', 'Integration of economies and cultures', 'Military expansion', 'Religious conversion'],
            correct: 1
        },
        {
            type: 'multiple-choice',
            question: 'Which organization regulates international trade?',
            options: ['United Nations', 'World Trade Organization', 'World Bank', 'NATO'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What does IMF stand for?',
            correct: ['International Monetary Fund', 'IMF', 'international monetary fund']
        },
        {
            type: 'multiple-choice',
            question: 'What is a key feature of economic globalization?',
            options: ['Closed borders', 'Free trade', 'Isolationism', 'Protectionism'],
            correct: 1
        },
        {
            type: 'multiple-choice',
            question: 'Which institution provides loans to developing countries?',
            options: ['WTO', 'World Bank', 'NATO', 'OPEC'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What term describes the spread of cultural elements across borders?',
            correct: ['cultural diffusion', 'cultural globalization', 'diffusion']
        },
        {
            type: 'multiple-choice',
            question: 'What is a multinational corporation?',
            options: ['A company operating in one country', 'A company operating in multiple countries', 'A government agency', 'A non-profit organization'],
            correct: 1
        },
        {
            type: 'multiple-choice',
            question: 'What technology has accelerated globalization?',
            options: ['Steam engine', 'Internet', 'Telegraph', 'Printing press'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What economic system emphasizes free markets and private ownership?',
            correct: ['capitalism', 'capitalist', 'free market', 'market economy']
        },
        {
            type: 'multiple-choice',
            question: 'What is outsourcing?',
            options: ['Hiring local workers', 'Moving business operations to other countries', 'Closing businesses', 'Government takeover'],
            correct: 1
        },
        {
            type: 'multiple-choice',
            question: 'Which of the following is a criticism of globalization?',
            options: ['Increased cultural exchange', 'Economic inequality', 'Technological advancement', 'Improved communication'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What term describes the interconnectedness of world economies?',
            correct: ['economic globalization', 'economic integration', 'global economy']
        }
    ],
    'understanding-globalization': [
        {
            type: 'multiple-choice',
            question: 'When did modern globalization accelerate?',
            options: ['Ancient times', 'Middle Ages', 'Late 20th century', 'Early 19th century'],
            correct: 2
        },
        {
            type: 'multiple-choice',
            question: 'What historical event marked early globalization?',
            options: ['Industrial Revolution', 'Silk Road trade', 'World War I', 'Cold War'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What term describes the process of increasing interconnectedness?',
            correct: ['globalization', 'globalisation']
        },
        {
            type: 'multiple-choice',
            question: 'Which dimension of globalization involves the spread of ideas?',
            options: ['Economic', 'Political', 'Cultural', 'Environmental'],
            correct: 2
        },
        {
            type: 'multiple-choice',
            question: 'What is a positive effect of globalization?',
            options: ['Cultural homogenization', 'Access to diverse products', 'Environmental degradation', 'Job losses'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What revolution in the 18th century facilitated global trade?',
            correct: ['Industrial Revolution', 'industrial revolution', 'industrial']
        },
        {
            type: 'multiple-choice',
            question: 'What does cultural globalization promote?',
            options: ['Cultural isolation', 'Exchange of cultural values', 'Military conflict', 'Economic sanctions'],
            correct: 1
        },
        {
            type: 'multiple-choice',
            question: 'Which of the following is a driver of globalization?',
            options: ['Trade barriers', 'Technological innovation', 'Isolationist policies', 'Cultural protectionism'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What term describes resistance to globalization?',
            correct: ['anti-globalization', 'antiglobalization', 'deglobalization']
        },
        {
            type: 'multiple-choice',
            question: 'What is political globalization?',
            options: ['Spread of democratic ideals', 'Economic integration', 'Cultural exchange', 'Environmental protection'],
            correct: 0
        },
        {
            type: 'multiple-choice',
            question: 'Which organization promotes global health?',
            options: ['WTO', 'WHO', 'IMF', 'World Bank'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What agreement addresses climate change globally?',
            correct: ['Paris Agreement', 'paris agreement', 'Paris Climate Agreement']
        }
    ],
    'legal-basis': [
        {
            type: 'multiple-choice',
            question: 'What is a bilateral treaty?',
            options: ['Agreement between two countries', 'Agreement among many countries', 'Domestic law', 'Corporate contract'],
            correct: 0
        },
        {
            type: 'multiple-choice',
            question: 'What is the Vienna Convention about?',
            options: ['Trade', 'Law of Treaties', 'Human Rights', 'Environmental Protection'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What term describes formal agreements between nations?',
            correct: ['treaty', 'treaties', 'international treaty']
        },
        {
            type: 'multiple-choice',
            question: 'What is diplomatic immunity?',
            options: ['Protection from prosecution in host country', 'Freedom to travel', 'Tax exemption', 'Military protection'],
            correct: 0
        },
        {
            type: 'multiple-choice',
            question: 'Which document establishes the United Nations?',
            options: ['Geneva Convention', 'UN Charter', 'Treaty of Versailles', 'Magna Carta'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What is the highest law-making body of the UN?',
            correct: ['General Assembly', 'general assembly', 'UN General Assembly']
        },
        {
            type: 'multiple-choice',
            question: 'What is the purpose of extradition treaties?',
            options: ['Trade facilitation', 'Transfer of criminals between countries', 'Cultural exchange', 'Military cooperation'],
            correct: 1
        },
        {
            type: 'multiple-choice',
            question: 'What does ratification of a treaty mean?',
            options: ['Rejection', 'Formal approval', 'Negotiation', 'Amendment'],
            correct: 1
        },
        {
            type: 'identification',
            question: 'What convention protects prisoners of war?',
            correct: ['Geneva Convention', 'geneva convention', 'Geneva Conventions']
        },
        {
            type: 'multiple-choice',
            question: 'What is a multilateral treaty?',
            options: ['Agreement between two countries', 'Agreement among multiple countries', 'Domestic law', 'Trade agreement'],
            correct: 1
        },
        {
            type: 'multiple-choice',
            question: 'Which principle allows states to enter into treaties?',
            options: ['Sovereignty', 'Democracy', 'Federalism', 'Monarchy'],
            correct: 0
        },
        {
            type: 'identification',
            question: 'What international body prosecutes war crimes?',
            correct: ['International Criminal Court', 'ICC', 'international criminal court']
        }
    ]
};

// Quiz State
let currentQuiz = {
    topic: '',
    questions: [],
    currentQuestionexplore: 0,
    userAnswers: [],
    startTime: null,
    endTime: null
};

// Initialize greeting
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Hello, Good ";
    
    if (hour < 12) greeting += "Morning";
    else if (hour < 18) greeting += "Afternoon";
    else greeting += "Evening";
    
    greeting += "...";
    
    const greetingElement = document.getElementById('greeting-text');
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// Start Quiz
function startQuiz(topic) {
    currentQuiz.topic = topic;
    currentQuiz.currentQuestionexplore = 0;
    currentQuiz.userAnswers = [];
    currentQuiz.startTime = new Date();
    
    // Get questions and randomize
    let allQuestions = [];
    
    if (topic === 'random') {
        // Combine questions from all topics
        Object.keys(quizDatabase).forEach(topicKey => {
            allQuestions = allQuestions.concat(quizDatabase[topicKey]);
        });
        // Shuffle and select 10 random questions from all topics
        currentQuiz.questions = shuffleArray(allQuestions).slice(0, 10);
    } else {
        // Get questions from specific topic
        allQuestions = [...quizDatabase[topic]];
        currentQuiz.questions = shuffleArray(allQuestions).slice(0, 10);
    }
    
    // Show quiz taking view
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-taking').style.display = 'block';
    
    // Set topic title
    const topicTitles = {
        'international-law': 'What is International Law',
        'world-regions': 'A World of Regions',
        'globalization-structure': 'Structure of Globalization',
        'understanding-globalization': 'Understanding Globalization',
        'legal-basis': 'Legal Basis of International Relations',
        'random': 'Random Quiz Challenge 🎲'
    };
    
    document.getElementById('quiz-topic-title').textContent = topicTitles[topic];
    
    // Display first question
    displayQuestion();
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Display Question
function displayQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestionexplore];
    const questionNumber = currentQuiz.currentQuestionexplore + 1;
    
    // Update progress
    document.getElementById('question-counter').textContent = `Question ${questionNumber} of ${currentQuiz.questions.length}`;
    const progressPercent = (questionNumber / currentQuiz.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progressPercent + '%';
    
    // Update question type and text
    document.getElementById('question-type').textContent = question.type === 'multiple-choice' ? 'Multiple Choice' : 'Identification';
    document.getElementById('question-text').textContent = question.question;
    
    // Display answers
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    if (question.type === 'multiple-choice') {
        const shuffledOptions = question.options.map((opt, idx) => ({ text: opt, originalexplore: idx }));
        const shuffled = shuffleArray(shuffledOptions);
        
        shuffled.forEach((option, explore) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            answerDiv.dataset.explore = option.originalexplore;
            
            const label = String.fromCharCode(65 + explore); // A, B, C, D
            answerDiv.innerHTML = `
                <span class="answer-label">${label}</span>
                <span>${option.text}</span>
            `;
            
            answerDiv.onclick = () => selectAnswer(option.originalexplore);
            
            // Check if this was previously selected
            if (currentQuiz.userAnswers[currentQuiz.currentQuestionexplore] === option.originalexplore) {
                answerDiv.classList.add('selected');
            }
            
            answersContainer.appendChild(answerDiv);
        });
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'identification-input';
        input.placeholder = 'Type your answer here...';
        input.value = currentQuiz.userAnswers[currentQuiz.currentQuestionexplore] || '';
        input.oninput = (e) => {
            currentQuiz.userAnswers[currentQuiz.currentQuestionexplore] = e.target.value;
        };
        answersContainer.appendChild(input);
    }
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentQuiz.currentQuestionexplore === 0;
    document.getElementById('next-btn').textContent = 
        currentQuiz.currentQuestionexplore === currentQuiz.questions.length - 1 ? 'Submit' : 'Next';
}

// Select Answer
function selectAnswer(explore) {
    currentQuiz.userAnswers[currentQuiz.currentQuestionexplore] = explore;
    
    // Update UI
    const options = document.querySelectorAll('.answer-option');
    options.forEach(opt => {
        opt.classList.remove('selected');
        if (parseInt(opt.dataset.explore) === explore) {
            opt.classList.add('selected');
        }
    });
}

// Next Question
function nextQuestion() {
    if (currentQuiz.currentQuestionexplore === currentQuiz.questions.length - 1) {
        // Submit quiz
        submitQuiz();
    } else {
        currentQuiz.currentQuestionexplore++;
        displayQuestion();
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuiz.currentQuestionexplore > 0) {
        currentQuiz.currentQuestionexplore--;
        displayQuestion();
    }
}

// Submit Quiz
function submitQuiz() {
    currentQuiz.endTime = new Date();
    
    // Calculate score
    let correctCount = 0;
    currentQuiz.questions.forEach((question, explore) => {
        const userAnswer = currentQuiz.userAnswers[explore];
        
        if (question.type === 'multiple-choice') {
            if (userAnswer === question.correct) {
                correctCount++;
            }
        } else {
            // Identification - check if answer matches any correct answer (case insensitive)
            if (userAnswer && question.correct.some(ans => 
                ans.toLowerCase().trim() === userAnswer.toLowerCase().trim())) {
                correctCount++;
            }
        }
    });
    
    // Save to history
    saveQuizHistory(correctCount);
    
    // Show results
    showResults(correctCount);
}

// Show Results
function showResults(correctCount) {
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const incorrectCount = totalQuestions - correctCount;
    
    // Calculate time taken
    const timeDiff = currentQuiz.endTime - currentQuiz.startTime;
    const minutes = Math.floor(timeDiff / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Hide quiz taking, show results
    document.getElementById('quiz-taking').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    // Update results
    const topicTitles = {
        'international-law': 'What is International Law',
        'world-regions': 'A World of Regions',
        'globalization-structure': 'Structure of Globalization',
        'understanding-globalization': 'Understanding Globalization',
        'legal-basis': 'Legal Basis of International Relations',
        'random': 'Random Quiz Challenge 🎲'
    };
    
    document.getElementById('results-topic').textContent = topicTitles[currentQuiz.topic];
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('score-fraction').textContent = `${correctCount}/${totalQuestions}`;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('time-taken').textContent = timeString;
    
    // Animate score circle
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percentage / 100) * circumference;
    const circle = document.getElementById('score-circle');
    
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
        circle.style.transition = 'stroke-dashoffset 1s ease-in-out';
    }, 100);
    
    // Change color based on score
    if (percentage >= 80) {
        circle.style.stroke = '#4CAF50';
        document.getElementById('score-percentage').style.color = '#4CAF50';
    } else if (percentage >= 60) {
        circle.style.stroke = '#FF9800';
        document.getElementById('score-percentage').style.color = '#FF9800';
    } else {
        circle.style.stroke = '#f44336';
        document.getElementById('score-percentage').style.color = '#f44336';
    }
}

// Save Quiz History
function saveQuizHistory(correctCount) {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    
    const topicTitles = {
        'international-law': 'What is International Law',
        'world-regions': 'A World of Regions',
        'globalization-structure': 'Structure of Globalization',
        'understanding-globalization': 'Understanding Globalization',
        'legal-basis': 'Legal Basis of International Relations',
        'random': 'Random Quiz Challenge 🎲'
    };
    
    const timeDiff = currentQuiz.endTime - currentQuiz.startTime;
    const minutes = Math.floor(timeDiff / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);
    
    history.push({
        topic: currentQuiz.topic,
        topicTitle: topicTitles[currentQuiz.topic],
        score: correctCount,
        total: currentQuiz.questions.length,
        percentage: Math.round((correctCount / currentQuiz.questions.length) * 100),
        date: new Date().toISOString(),
        timeMinutes: minutes,
        timeSeconds: seconds,
        questions: currentQuiz.questions,
        userAnswers: currentQuiz.userAnswers
    });
    
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

// View History
function viewHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-history').style.display = 'block';
    
    // Calculate stats
    const totalQuizzes = history.length;
    const avgScore = totalQuizzes > 0 
        ? Math.round(history.reduce((sum, item) => sum + item.percentage, 0) / totalQuizzes)
        : 0;
    const bestScore = totalQuizzes > 0
        ? Math.max(...history.map(item => item.percentage))
        : 0;
    
    document.getElementById('total-quizzes').textContent = totalQuizzes;
    document.getElementById('avg-score').textContent = avgScore + '%';
    document.getElementById('best-score').textContent = bestScore + '%';
    
    // Display history list
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        historyList.innerHTML = `
            <div class="empty-history">
                <p>No quiz history yet</p>
                <button class="start-quiz-btn" onclick="backToSelection()">Take Your First Quiz</button>
            </div>
        `;
    } else {
        // Reverse to show newest first
        history.reverse().forEach((item, explore) => {
            const date = new Date(item.date);
            const dateString = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
            const originalexplore = history.length - 1 - explore; // Get original explore for deletion
            
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="history-item-content">
                    <div class="history-item-info">
                        <h4>${item.topicTitle}</h4>
                        <p>${dateString} • ${item.timeMinutes}:${item.timeSeconds.toString().padStart(2, '0')}</p>
                    </div>
                    <div class="history-item-score">
                        <div class="history-score">${item.percentage}%</div>
                        <div class="history-details">${item.score}/${item.total} correct</div>
                    </div>
                </div>
                <button class="delete-history-btn" onclick="deleteHistoryItem(${originalexplore})">🗑️ Delete</button>
            `;
            historyList.appendChild(historyItem);
        });
        
        // Add clear all button
        const clearAllBtn = document.createElement('button');
        clearAllBtn.className = 'clear-all-history-btn';
        clearAllBtn.textContent = '🗑️ Clear All History';
        clearAllBtn.onclick = clearAllHistory;
        historyList.appendChild(clearAllBtn);
    }
}

// Delete single history item
function deleteHistoryItem(explore) {
    if (confirm('Are you sure you want to delete this quiz history?')) {
        const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        history.splice(explore, 1);
        localStorage.setItem('quizHistory', JSON.stringify(history));
        viewHistory(); // Refresh the history view
    }
}

// Clear all history
function clearAllHistory() {
    if (confirm('Are you sure you want to delete ALL quiz history? This cannot be undone.')) {
        localStorage.removeItem('quizHistory');
        viewHistory(); // Refresh the history view
    }
}

// Review Answers
function reviewAnswers() {
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('review-answers').style.display = 'block';
    
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    currentQuiz.questions.forEach((question, explore) => {
        const userAnswer = currentQuiz.userAnswers[explore];
        let isCorrect = false;
        let correctAnswerText = '';
        let userAnswerText = '';
        
        if (question.type === 'multiple-choice') {
            isCorrect = userAnswer === question.correct;
            correctAnswerText = question.options[question.correct];
            userAnswerText = userAnswer !== undefined ? question.options[userAnswer] : 'No answer';
        } else {
            isCorrect = userAnswer && question.correct.some(ans => 
                ans.toLowerCase().trim() === userAnswer.toLowerCase().trim());
            correctAnswerText = question.correct[0];
            userAnswerText = userAnswer || 'No answer';
        }
        
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <div class="review-question">
                <strong>Question ${explore + 1}:</strong> ${question.question}
            </div>
            <div class="review-answer your-answer ${isCorrect ? 'correct' : 'incorrect'}">
                <span class="answer-label-text">Your Answer:</span> ${userAnswerText}
                ${isCorrect ? '✓' : '✗'}
            </div>
            ${!isCorrect ? `
                <div class="review-answer correct-answer">
                    <span class="answer-label-text">Correct Answer:</span> ${correctAnswerText} ✓
                </div>
            ` : ''}
        `;
        reviewList.appendChild(reviewItem);
    });
}

// Back to Results
function backToResults() {
    document.getElementById('review-answers').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
}

// Back to Selection
function backToSelection() {
    document.getElementById('quiz-taking').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-history').style.display = 'none';
    document.getElementById('review-answers').style.display = 'none';
    document.getElementById('quiz-selection').style.display = 'block';
}

// Exit Quiz
function exitQuiz() {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
        backToSelection();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    setInterval(updateGreeting, 60000); // Update every minute
});
