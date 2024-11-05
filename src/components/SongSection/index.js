import {Component} from 'react'

import {FiSearch} from 'react-icons/fi'
import PlayList from '../PlayList'

import {
  SongSectionContainer,
  SingerCard,
  SingerName,
  Designation,
  TrackListsContainer,
  TrackListsContainerHeader,
  TrackListsContainerHeading,
  SearchInputField,
  SearchInput,
  SongsContainer,
  SongsPlaylist,
  NoSongsFoundContainer,
  NoSongsFoundTxt,
} from '../styledComponents'

class SongSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialTracksList: props.initialTracksList,
      searchInput: '',
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteSong = id => {
    const {initialTracksList} = this.state
    const updatedTracksList = initialTracksList.filter(
      eachSong => eachSong.id !== id,
    )

    this.setState({initialTracksList: updatedTracksList})
  }

  render() {
    const {initialTracksList, searchInput} = this.state
    const searchResults = initialTracksList.filter(eachSong =>
      eachSong.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <SongSectionContainer>
        <SingerCard>
          <SingerName>Ed Sheeran</SingerName>
          <Designation>Singer</Designation>
        </SingerCard>
        <TrackListsContainer>
          <TrackListsContainerHeader>
            <div>
              <TrackListsContainerHeading>
                Songs Playlist
              </TrackListsContainerHeading>
            </div>
            <SearchInputField>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearch}
              />
              <FiSearch style={{color: '#ffffff', fontSize: '13px'}} />
            </SearchInputField>
          </TrackListsContainerHeader>
          {searchResults.length > 0 ? (
            <SongsContainer>
              <SongsPlaylist>
                {searchResults.map(eachSong => (
                  <PlayList
                    key={eachSong.id}
                    songDetails={eachSong}
                    deleteSong={this.onDeleteSong}
                  />
                ))}
              </SongsPlaylist>
            </SongsContainer>
          ) : (
            <NoSongsFoundContainer>
              <NoSongsFoundTxt>No Songs Found</NoSongsFoundTxt>
            </NoSongsFoundContainer>
          )}
        </TrackListsContainer>
      </SongSectionContainer>
    )
  }
}

export default SongSection
