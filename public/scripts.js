const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            count: 10,
            correctAnswers: 0,
            wrongAnswers: 0,
            showResult: false,
            questions: [
                {
                    question: "ما هي وظيفة خاصية 'margin' في CSS؟",
                    answers: {
                        a: "تحديد حجم الخط",
                        b: "تحديد المسافة الخارجية حول العنصر",
                        c: "تغيير لون الخلفية",
                        d: "محاذاة النص",
                    },
                    correctAnswer: 'b'
                },
                {
                    question: "ما هي الكلمة المفتاحية التي تُستخدم لربط ملف CSS خارجي بملف HTML؟",
                    answers: {
                        a: "<style>",
                        b: "<script>",
                        c: "<link>",
                        d: "<css>",
                    },
                    correctAnswer: 'c'
                },
                {
                    question: "ما هو تأثير الخاصية 'display: none;' في CSS؟",
                    answers: {
                        a: "إخفاء العنصر مع الحفاظ على المساحة",
                        b: "توسيط العنصر",
                        c: "إخفاء العنصر وإزالة المساحة الخاصة به",
                        d: "جعل العنصر شفافًا",
                    },
                    correctAnswer: 'c'
                },
                {
                    question: "ما هو الإطار الذي يعتمد على CSS لتصميم الواجهات ويتميز بكتابة أصناف مباشرة داخل HTML؟",
                    answers: {
                        a: "Bootstrap",
                        b: "Materialize",
                        c: "Tailwind CSS",
                        d: "Foundation",
                    },
                    correctAnswer: 'c'
                },
                {
                    question: "في Tailwind CSS، ما هي الكلاس المستخدمة لإعطاء العنصر خلفية حمراء؟",
                    answers: {
                        a: "bg-red",
                        b: "background-red",
                        c: "red-bg",
                        d: "bg-red-500",
                    },
                    correctAnswer: 'd'
                },
                {
                    question: "أي من التالي يُستخدم لتوسيط النص في Tailwind CSS؟",
                    answers: {
                        a: "text-left",
                        b: "text-center",
                        c: "text-right",
                        d: "center-text",
                    },
                    correctAnswer: 'b'
                },
                {
                    question: "ما فائدة استخدام flex في CSS؟",
                    answers: {
                        a: "إعطاء الظلال للعناصر",
                        b: "جعل العناصر تتحرك تلقائياً",
                        c: "تصميم تخطيطات مرنة",
                        d: "تغيير الألوان تلقائيًا",
                    },
                    correctAnswer: 'c'
                },
                {
                    question: "ما هي الكلاس المناسبة لجعل الزر أكبر في Tailwind CSS؟",
                    answers: {
                        a: "text-sm",
                        b: "text-lg",
                        c: "font-light",
                        d: "p-0",
                    },
                    correctAnswer: 'b'
                },
                {
                    question: "أي خاصية في CSS تُستخدم لتغيير لون النص؟",
                    answers: {
                        a: "color",
                        b: "background-color",
                        c: "font-style",
                        d: "text-align",
                    },
                    correctAnswer: 'a'
                },
                {
                    question: "في Tailwind CSS، ما الكلاس المستخدم لإضافة تباعد داخلي (padding) بمقدار 4؟",
                    answers: {
                        a: "padding-4",
                        b: "pd-4",
                        c: "p-4",
                        d: "pad-4",
                    },
                    correctAnswer: 'c'
                }
            ]

        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if (this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswers++
            else
                this.wrongAnswers++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = '';
        },
        showResults() {
            this.showResult = true;
            // this.index++
            if (this.correctAnswers >= this.count / 2) {
                this.startConfetti();
            } else {
                this.showSadEmojis();
            }
        },
        resetQuiz() {
            this.showResult = true;
            this.index = 0
            this.selectedAnswer = ''
            this.wrongAnswers = 0
            this.correctAnswers = 0
            this.showResult = false
        },
        startConfetti() {
            confetti({
                particleCount: 250,
                spread: 70,
                origin: { y: 0.2 }
            });
        },
        showSadEmojis() {
            const emojis = ['😢', '💔', '😞'];
            for (let i = 0; i < 20; i++) {
                const emoji = document.createElement('div');
                emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.className = 'fixed top-0 text-3xl animate-bounce';
                emoji.style.left = `${Math.random() * 100}%`;
                document.body.appendChild(emoji);

                setTimeout(() => emoji.remove(), 3000);
            }
        }
    }
})

app.mount('#app')