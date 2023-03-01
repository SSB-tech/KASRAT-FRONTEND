import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Workouts.css';

function Workouts(){
    const exercises = [
        {
            id: 1,
            title: 'Jumping Jacks',
            gifUrl: 'https://media.giphy.com/media/ZcKxE91kiP7e3O7Me4/giphy.gif'
        },
        {
            id: 2,
            title: 'Squats',
            gifUrl: 'https://media.giphy.com/media/3NwOzakbqzOrsfMKBC/giphy.gif'
        },
        {
            id: 3,
            title: 'Push-ups',
            gifUrl: 'https://media.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif'
        },
        {
            id: 4,
            title: 'Russian twists',
            gifUrl: 'https://media.giphy.com/media/8ZhQhDNeikLb4D1LY5/giphy.gif'
        },
        {
            id: 5,
            title: 'Lunges',
            gifUrl: 'https://media.giphy.com/media/ddR8T7OIILMK8H2YEh/giphy-downsized-large.gif',
        },
        {
            id: 6,
            title: 'Hip Dips',
            gifUrl: 'https://media.giphy.com/media/Pihv2leEf9UKQdloXA/giphy.gif'
        },
        {
            id: 7,
            title: 'Tricep dips',
            gifUrl: 'https://media.giphy.com/media/yr17KHeCtKgjGE1SMb/giphy.gif'
        },
        {
            id: 8,
            title: 'Dumbell Overhead Press',
            gifUrl: 'https://media.giphy.com/media/WUUqCv9UdmqWyS9B13/giphy.gif'
        },
        {
            id: 9,
            title: 'Mountain climbers',
            gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjhkMjQzNGMxZGYyNGZkOWNjYzVjYWVkNTkxZTU0ZGZiMzFlNDVkZCZjdD1n/l2RnAY30gjJ6ukKJy/giphy.gif'
        }
    ];

    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <>
            <Navbar />
            <div className='Workout-header'>
                <span className='stroke-text'> Get In. </span>
                <span>Get Fit.</span>
                <span className='stroke-text'> Get on. </span>
            </div>
            <div className="search-bar">
                <i className="fa fa-search"></i>
                    <input
                        type="text"
                        placeholder="Search Exercises"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
            </div>
            <div className="card-container">
                <div className="row">
                    {exercises.filter(exercise => exercise.title.toLowerCase().includes(searchQuery.toLowerCase())).map(exercise => (
                        <div key={exercise.id} className="card">
                            <h2 className="card-title">{exercise.title}</h2>
                            <img src={exercise.gifUrl} alt={exercise.title} className="card-img" />
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Workouts;