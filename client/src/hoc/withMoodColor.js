import React from 'react'

const COLOR_DEFAULT = '#E0E0E0';

const color = ['#FF6B6B', '#FECA57', '#10AC84', '#1DD1A1', '#F368E0'];

const withMoodColor = (Component) => {

  const Wrapper = (props) => {
    const moodColor = color[props.mood] || COLOR_DEFAULT;

    return <Component {...props} moodColor={moodColor} />
  }

  return Wrapper;
  
}

export default withMoodColor
