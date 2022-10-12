import React, { Component } from 'react';
import Oven from './Oven';
import Sink from './Sink'

// console.log(Oven)
// console.log(Sink)


const Kitchen = {
    render() {
        return (
            <div class="applicances">
                <Oven />
                <Sink />
            </div>
        )
    }

}

export default Kitchen
