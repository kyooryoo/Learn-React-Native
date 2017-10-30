import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import WorkoutDetail from './WorkoutDetail';
import Card from './Card';

// Class component can fetch dynamic data and rerender to device
// state only works with class based component for storing data within the component
class WorkoutList extends Component {
  state = { workouts: [] };

  componentWillMount() {
    axios.get('https://pure-bayou-15121.herokuapp.com/sampledata')
      .then(response => this.setState({ workouts: response.data }));
  }

  renderWorkouts() {
    return this.state.workouts.map(workout =>
      <WorkoutDetail key={workout.action} workout={workout} />
    );
  }

  render() {
    return (
      <ScrollView>
        <Card>
          {this.renderWorkouts()}
        </Card>
      </ScrollView>
    );
  }
}

export default WorkoutList;
