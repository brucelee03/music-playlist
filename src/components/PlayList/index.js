import {AiOutlineDelete} from 'react-icons/ai'

import {
  SongListItem,
  SongImg,
  SongContent,
  SongName,
  SongGenre,
  DurationAndDeleteBtnCard,
  SongDuration,
  SongDeletionBtn,
} from '../styledComponents'

const PlayList = props => {
  const {songDetails, deleteSong} = props
  const {id, name, imageUrl, genre, duration} = songDetails

  const onDeleteSong = () => {
    deleteSong(id)
  }

  return (
    <SongListItem>
      <SongImg src={imageUrl} alt="track" />
      <SongContent>
        <div>
          <SongName>{name}</SongName>
          <SongGenre>{genre}</SongGenre>
        </div>
        <DurationAndDeleteBtnCard>
          <SongDuration>{duration}</SongDuration>
          <SongDeletionBtn
            type="button"
            data-testid="delete"
            onClick={onDeleteSong}
          >
            <AiOutlineDelete style={{color: '#ffffff', fontSize: '16px'}} />
          </SongDeletionBtn>
        </DurationAndDeleteBtnCard>
      </SongContent>
    </SongListItem>
  )
}

export default PlayList
