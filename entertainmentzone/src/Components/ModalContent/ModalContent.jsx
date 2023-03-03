import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import './ModalContent.css'
import YouTubeIcon from '@mui/icons-material/YouTube';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  height: '80%',
  bgcolor: '#39445a',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,

};


export default function ModalContent({ children, type, id}) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState();
  const [youtube, setYoutube] = React.useState()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const poster ='https://image.tmdb.org/t/p/w500/'
  const unava =  "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";



  React.useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_APP_API_KEY}`)
    .then(res => {
      setContent(res.data)

    })
    .catch(err => {
      console.log(err)
    })
  })

  axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_APP_API_KEY}`)
  .then(res => {
    setYoutube(res.data.results[0]?.key)
  })
  .catch(err => {
    console.log(err)
  })

  return (
    <>
      <div className='trending-wrapper' onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {
            content && (
              <Box sx={style}>
              <div className="modal_container">
                    <div className="modal_wrapper">
                 
                        <img alt={content.movie} className='modal_backdrop' src={content.backdrop_path === null ? `${unava}` : `${poster}.${content.backdrop_path}` }/>
                        <img alt={content.movie} className='modal_poster' src={content.poster_path === null ? `${unava}` : `${poster}.${content.poster_path}` }/>
                     
                      <div className="right">
                        <h2 className='modal_title'>{content.title || content.name} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "N/A"
                    ).substring(0, 4)}
                    ) </h2>
                        <span className='modal_tag'> {content.tagline} </span>
                       
                    
                          <span className='overview_content'>{content.overview === "" ? 'Not Available' : content.overview}</span>
                      
                        <a className='modal_link' href={`https://www.youtube.com/watch?v=${youtube}`} target="_blank" rel="noreferrer"> 
                        <button className='modal_button'> <YouTubeIcon style={{margin: '0 7'}}/> WATCH THE TRAILER </button>
                        </a>
                      </div>
                    </div>
                  </div>
              </Box>
            )
          }
        </Fade>
      </Modal>
    </>
  );
}
