import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


function Home() {

    const [data, setData] = useState([]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const apiGet = () => {
        fetch('http://localhost:4000/albums')
            .then(response => response.json())
            .then(json => {

                setData(json);
            });


    };
    useEffect(() => {
        apiGet();
    }, [])


    const RenderSongs = (props) => {
        return props.songs_info.map((song) => {
            return (<ListItem key={song.song_name}>
                <ListItemText>
                    {song.song_name}
                </ListItemText>
                <audio controls>
                    <source src={"data:audio/mp3;base64," + song.songpreview} />
                </audio>
                <Stack spacing={2} direction="row">
                    <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: "black", color: "#FFD700" }}>Comprar Digital</Button>
                    <Button onClick={handleOpen} variant="outlined" style={{ backgroundColor: "#FFD700", color: "black" }}>Comprar Físico</Button>
                </Stack>

            </ListItem>)

        })
    }

    const RenderAlbums = () => {

        return data.map((album) => {
            return (<Box key={album._id} marginTop={10}>
                <Card><CardHeader title={album.album_info[0].album_name} subheader={album.author_info[0].author_name} />
                    <CardMedia
                        component="img"
                        height="10%"
                        image={album.album_info[0].album_img}
                        alt="cover"
                    />
                    <List><RenderSongs songs_info={album.songs_info} /></List>
                </Card></Box>)

        })
    }


    return (
        <div>
            <Box paddingLeft={40} paddingRight={40} paddingTop={0}>
                <RenderAlbums /></Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Función No Disponible Por El Momento
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Disculpe las molestias.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Home