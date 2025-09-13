// Lesson data
const lessonsData = {
    "1st Grade": {
        traditional: [
            {
                id: "1-traditional-1",
                title: "Addition and Subtraction Basics",
                description: "Learn the fundamentals of adding and subtracting numbers."
            },
            {
                id: "1-traditional-2", 
                title: "Reading Simple Words",
                description: "Practice reading and understanding simple words and sentences."
            }
        ],
        game: [
            {
                id: "1-game-1",
                title: "Addition and Subtraction Puzzle Game",
                description: "Interactive puzzles to practice addition and subtraction."
            },
            {
                id: "1-game-2",
                title: "Word Matching Game", 
                description: "Fun matching game to improve reading skills."
            }
        ]
    },
    "2nd Grade": {
        traditional: [
            {
                id: "2-traditional-1",
                title: "Multiplication Introduction",
                description: "Introduction to multiplication concepts and basic tables."
            },
            {
                id: "2-traditional-2",
                title: "Reading Comprehension",
                description: "Develop reading comprehension skills with short passages."
            }
        ],
        game: [
            {
                id: "2-game-1",
                title: "Multiplication Quiz Game",
                description: "Quizzes to reinforce multiplication concepts."
            },
            {
                id: "2-game-2",
                title: "Story Quiz Game",
                description: "Interactive story with comprehension questions."
            }
        ]
    },
    "3rd Grade": {
        traditional: [
            {
                id: "3-traditional-1",
                title: "Fractions and Shapes",
                description: "Understanding fractions through geometric shapes."
            },
            {
                id: "3-traditional-2",
                title: "Creative Writing Basics",
                description: "Learn the basics of creative writing and storytelling."
            }
        ],
        game: [
            {
                id: "3-game-1",
                title: "Fractions Interactive Shapes Game",
                description: "Explore fractions through interactive shapes."
            },
            {
                id: "3-game-2",
                title: "Story Builder Game",
                description: "Build stories from words and sentences."
            }
        ]
    },
    "4th Grade": {
        traditional: [
            {
                id: "4-traditional-1",
                title: "Multiplication and Division Practice",
                description: "Advanced multiplication and division problems."
            },
            {
                id: "4-traditional-2",
                title: "Reading to Learn",
                description: "Use reading as a tool for learning new subjects."
            }
        ],
        game: [
            {
                id: "4-game-1",
                title: "Timed Math Challenge Game",
                description: "Timed challenges practicing multiplication and division."
            },
            {
                id: "4-game-2",
                title: "Reading Comprehension Game",
                description: "Answer questions based on reading passages."
            }
        ]
    },
    "5th Grade": {
        traditional: [
            {
                id: "5-traditional-1",
                title: "Decimals and Fractions",
                description: "Working with decimals and complex fractions."
            },
            {
                id: "5-traditional-2",
                title: "Essay Writing and Grammar",
                description: "Advanced writing skills and grammar rules."
            }
        ],
        game: [
            {
                id: "5-game-1",
                title: "Decimals and Fractions Puzzle Game",
                description: "Puzzles solving problems with decimals and fractions."
            },
            {
                id: "5-game-2",
                title: "Grammar and Essay Writing Game",
                description: "Interactive games teaching grammar and writing skills."
            }
        ]
    }
};

// DOM elements
const gradeSelection = document.getElementById('grade-selection');
const lessonsView = document.getElementById('lessons-view');
const backBtn = document.getElementById('back-btn');
const gradeTitle = document.getElementById('grade-title');
const traditionalLessons = document.getElementById('traditional-lessons');
const gameLessons = document.getElementById('game-lessons');

// Current state
let currentGrade = null;

// Initialize the app
function init() {
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Grade card click events
    const gradeCards = document.querySelectorAll('.grade-card');
    gradeCards.forEach(card => {
        card.addEventListener('click', () => {
            const grade = card.dataset.grade;
            showLessons(grade);
        });
    });

    // Back button click event
    backBtn.addEventListener('click', showGradeSelection);
}

// Show lessons for selected grade
function showLessons(grade) {
    currentGrade = grade;
    gradeTitle.textContent = `${grade} Lessons`;
    
    // Clear previous lessons
    traditionalLessons.innerHTML = '';
    gameLessons.innerHTML = '';
    
    // Get lessons for the grade
    const gradeData = lessonsData[grade];
    
    // Populate traditional lessons
    gradeData.traditional.forEach(lesson => {
        const lessonCard = createLessonCard(lesson, 'traditional');
        traditionalLessons.appendChild(lessonCard);
    });
    
    // Populate game lessons
    gradeData.game.forEach(lesson => {
        const lessonCard = createLessonCard(lesson, 'game');
        gameLessons.appendChild(lessonCard);
    });
    
    // Show lessons view, hide grade selection
    gradeSelection.style.display = 'none';
    lessonsView.style.display = 'block';
}

// Create lesson card element
function createLessonCard(lesson, type) {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    
    const isTraditional = type === 'traditional';
    const badgeClass = isTraditional ? 'traditional-badge' : 'game-badge';
    const badgeText = isTraditional ? 'Traditional Lesson' : 'Game Lesson';
    const buttonClass = isTraditional ? 'start-lesson-btn' : 'play-game-btn';
    const buttonText = isTraditional ? 'Start Lesson' : 'Play Game';
    
    card.innerHTML = `
        <div class="lesson-content">
            <div class="lesson-info">
                <div class="lesson-title">${lesson.title}</div>
                ${lesson.description ? `<div class="lesson-description">${lesson.description}</div>` : ''}
                <div class="lesson-type-badge ${badgeClass}">${badgeText}</div>
            </div>
            <button class="lesson-button ${buttonClass}" onclick="startLesson('${lesson.id}')">${buttonText}</button>
        </div>
    `;
    
    return card;
}

// Show grade selection
function showGradeSelection() {
    gradeSelection.style.display = 'block';
    lessonsView.style.display = 'none';
    currentGrade = null;
}

// Start lesson function
function startLesson(lessonId) {
    // In a real application, this would navigate to the lesson
    alert(`Starting lesson: ${lessonId}`);
    console.log(`Starting lesson: ${lessonId}`);
    
    // You could redirect to a specific lesson page here
    // window.location.href = `/lesson/${lessonId}`;
}

// Add some animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Add fade-in animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentGrade) {
        showGradeSelection();
    }
});

// Add smooth scrolling for better UX
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('grade-card')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});