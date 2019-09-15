import { Question } from './question';

export const questionsSeed: Question[] = [
    {
        id: 1,
        title: 'What is the Best Way to Carry a Duck?',
        description: 'If you already own ducks, then you have likely already developed your own way of carrying them. If you have never carried a duck before, this is something to practice, because you never know when you will need to physically move one of your own. Before you can pick a duck up, you first need to catch it. What is the Best Way to Carry a Duck?',
        date: new Date(),
        imageUrl: 'https://www.pressandjournal.co.uk/wp-content/uploads/sites/2/2015/01/Duck-pic.jpg',
        upVotes: 5,
        downVotes: 0,
        answers: 0
    },
    {
        id: 2,
        title: 'How many stars are in the sky?',
        description: 'This question has layers of answers – the most common answer is “it depends” – it depends on where you are, what part of the year it is, what time it is, and most of all… how dark are your skies and how powerful is your telescope?',
        date: new Date(),
        imageUrl: 'http://www.ljmu.ac.uk/~/media/ljmu/news/starsedit.jpg',
        upVotes: 0,
        downVotes: 8,
        answers: 0
    },
    {
        id: 3,
        title: 'How do I update each dependency in package.json to the latest version?',
        description: 'I copied package.json from another project and now want to bump all of the dependencies to their latest versions since this is a fresh project and I don\'t mind fixing something if it breaks. What\'s the easiest way to do this? The best way I know of now is to run npm info express version then update package.json manually for each one. There must be a better way.',
        date: new Date(),
        imageUrl: '',
        upVotes: 10,
        downVotes: 0,
        answers: 0
    }
];