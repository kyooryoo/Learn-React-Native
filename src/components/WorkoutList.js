import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import WorkoutDetail from './WorkoutDetail';

// Class component can fetch dynamic data and rerender to device
// state only works with class based component for storing data within the component
class WorkoutList extends Component {
  state = { workouts: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ workouts: response.data }));
  }

  renderWorkouts() {
    return this.state.workouts.map(workout =>
      <WorkoutDetail key={workout.title} workout={workout} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderWorkouts()}
      </ScrollView>
    );
  }
}

export default WorkoutList;
