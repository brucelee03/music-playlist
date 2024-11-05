import styled from 'styled-components'

export const SongSectionContainer = styled.div`
  font-family: 'Roboto';
`

export const SingerCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 49vh;
  padding: 12px 58px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const SingerName = styled.h1`
  color: #ffffff;
  font-size: 39px;
  font-weight: 500;
  margin-bottom: 7px;
`

export const Designation = styled.p`
  margin-top: 0;
  color: #ffffff;
  font-size: 23px;
  font-weight: 400;
`

export const TrackListsContainer = styled.div`
  background-color: #152850;
  background-size: cover;
  padding: 1px 42px 20px 42px;
  height: 51vh;
`

export const TrackListsContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TrackListsContainerHeading = styled.h1`
  color: #fff;
  font-size: 26px;
  font-weight: 500;
`

export const SearchInputField = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: solid 1px #cbd5e1;
  padding: 2px 8px;
  border-radius: 4px;
`

export const SearchInput = styled.input`
  padding: 2px 7px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border-width: 0;
  outline: none;
`

export const SongsContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 95%;
`

export const SongsPlaylist = styled.ul`
  list-style: none;
  margin-left: -40px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  overflow-y: auto;
  position: relative;
  height: 222px;
  width: 100%;
`

export const NoSongsFoundContainer = styled(SongsContainer)`
  justify-content: center;
  height: 244px;
`

export const NoSongsFoundTxt = styled.p`
  color: white;
  font-size: 35px;
  font-weight: 500;
  text-align: center;
`

export const SongListItem = styled.li`
  display: flex;
  align-items: center;
`

export const SongImg = styled.img`
  width: 161px;
  margin-right: 20px;
  height: 105px;
`

export const SongContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SongName = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`

export const SongGenre = styled.p`
  color: #3b82f6;
  font-size: 19px;
`

export const DurationAndDeleteBtnCard = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right: 22px;
`

export const SongDuration = styled.p`
  color: #ffffff;
  font-size: 19px;
`

export const SongDeletionBtn = styled.button`
  background-color: transparent;
  border-width: 0;
`
