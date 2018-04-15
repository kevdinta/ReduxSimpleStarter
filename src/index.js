import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyDc0RdqZfYshIFsnmMjUYHZDMRRf2MZ7lU';

// Create component => functionnal component (don't have state)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('violin concerto d major sayka');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // this.setState({ videos: videos });
            // equivalent ES6 syntax if propertyName = valueName
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    };
};

// Show in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));