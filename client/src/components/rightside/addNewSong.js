import { useRef, useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { saveNewSong } from "../../redux/saga/saga";
import { MdDelete } from "react-icons/md";
import { device } from "./responsive";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
//import { storage } from "../../firebase.config";
import { storage } from "../../config/firebase.config";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setAllSongs } from "../../redux/action";
import Modal from "./modal";

const MainAddDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 0rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: column;
`;

const SongName = styled.input.attrs({
  type: "text",
  placeholder: "Add Song Name",
  id: "search-field",
  name: "search-field",
})`
  font-size: 14px;
  height: 2rem;
  width: 22%;
  padding: 1rem;
  margin-left: 1rem;
  color: whitesmoke;
  background: rgb(30, 42, 62);
  background: linear-gradient(
    75deg,
    rgb(40, 58, 88) 0%,
    rgba(54, 69, 98, 0.3) 100%
  );
  box-shadow: 5px 1px 2px 1px #090f1f;
  border: none;
  border-radius: 5px;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: rgb(90, 90, 90);
  }
  @media ${device.tabletL} {
    width: 50%;
    margin-left: 3rem;
    margin-top: 0.2rem;
  }
`;
const AlbumNameInput = styled(SongName).attrs({
  placeholder: "Add Album name",
})``;
const ArtistNameInput = styled(SongName).attrs({
  placeholder: "Add Artist name",
})``;
const LanguageInput = styled(SongName).attrs({
  placeholder: "Add song Language",
})``;
const CatagiryInput = styled(SongName).attrs({
  placeholder: "Add song Catagory",
})``;

const ImageUpload = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(30, 42, 62);
  background: linear-gradient(
    75deg,
    rgb(40, 58, 88) 0%,
    rgba(54, 69, 98, 0) 100%
  );
  box-shadow: 5px 1px 2px 1px #090f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SongUpload = styled.div`
  width: 100%;
  height: 100%;
  /* background: rgb(90,90,90); */
  background: rgb(30, 42, 62);
  background: linear-gradient(
    75deg,
    rgb(40, 58, 88) 0%,
    rgba(54, 69, 98, 0) 100%
  );
  box-shadow: 5px 1px 2px 1px #090f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AddWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-around;
  @media ${device.mobileL} {
    width: 70%;
    margin-left: 4rem;
  }
`;
const UploadButton = styled.button.attrs({
  type: "submit",
})`
  width: 40%;
  height: 3rem;
  font-size: 14px;
  background: rgb(30, 42, 62);
  background: linear-gradient(
    75deg,
    rgb(40, 58, 88) 0%,
    rgba(54, 69, 98, 0.5) 100%
  );
  box-shadow: 5px 1px 2px 1px #090f1f;
  border: none;
  border-radius: 5px;
  margin-left: 30%;
  margin-top: 4rem;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    /* background: #36e2ec; */
    background-color: #43b3f3;
  }
`;
const BiCloudUploadIcon = styled(BiCloudUpload)`
  height: 50%;
  width: 50%;
`;
const ImageUploadLabel = styled.label.attrs({
  for: "img-upload-button",
})`
  width: 40%;
  height: 80%;
`;
const SongUploadLabel = styled.label.attrs({
  for: "song-upload-button",
})`
  width: 40%;
  height: 80%;
`;

const ImgUploadInput = styled.input.attrs({
  type: "file",
  name: "upload-image",
  accept: "image/*",
  id: "img-upload-button",
})`
  width: 0;
  height: 0;
`;
const SongUploadInput = styled.input.attrs({
  type: "file",
  name: "upload-image",
  accept: "audio/*",
  id: "song-upload-button",
})`
  width: 0;
  height: 0;
`;
const UploadedImage = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 10%;
`;
const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${device.tabletL} {
    flex-direction: column;
  }
`;
const UploadWrapper = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
const DeleteIcon = styled(MdDelete)`
  color: red;
  font-weight: bold;
  float: right;
  font-size: 30px;
  margin-top: 1rem;
  margin-right: 0.4rem;
  &:hover {
    transform: scale(1.3);
  }
`;
const AddNewSong = () => {
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [songImageUrl, setSongImageUrl] = useState(null);
  const [setAlert, setSetAlert] = useState(null);
  const [alertMsg, setAlertMsg] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const [isAudioLoading, setIsAudioLoading] = useState(false);

  const [songName, setSongName] = useState("");
  const [audioAsset, setAudioAsset] = useState(null);
  const [duration, setDuration] = useState(null);
  const [albumFilter, setAlbumFilter] = useState("");
  const [artistFilter, setArtistFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalType, setModalType] = useState("");

  const audioRef = useRef();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.songsReducer.allSongs);

  const removeModal = () => {
    setIsModal(false);
  };
  const saveSong = () => {
    if (!songImageUrl || !audioAsset || !songName) {
      setIsModal(true);
      setModalContent("Please, insert required fields");
      setModalType("remove");
      setTimeout(() => {
        setSetAlert(null);
      }, 4000);
    } else {
      setIsImageLoading(true);
      setIsAudioLoading(true);
      const data = {
        name: songName,
        imageURL: songImageUrl,
        songUrl: audioAsset,
        album: albumFilter,
        artist: artistFilter,
        language: languageFilter,
        category: filterTerm,
        favorite: isFavorite,
      };

      saveNewSong(data).then((res) => {
        console.log(audioAsset);
        dispatch(setAllSongs());
        // dispatch({ type: actionType.SET_ALL_SONGS, allSongs: songs.data });
      });
      setIsModal(true);
      setModalContent("Song Uploaded successfully");
      setModalType("add");
      setTimeout(() => {
        setSetAlert(null);
      }, 4000);
      setIsImageLoading(false);
      setIsAudioLoading(false);
      setSongName("");
      setSongImageUrl(null);
      setAudioAsset(null);
      setArtistFilter("");
      setAlbumFilter("");
      setLanguageFilter("");
      setFilterTerm("");
      setDuration(null);
    }
  };

  const deleteImageObject = (songURL, action) => {
    if (action === "image") {
      setIsImageLoading(true);
      setSongImageUrl(null);
    } else {
      setIsAudioLoading(true);
      setAudioAsset(null);
    }
    const deleteRef = ref(storage, songURL);
    deleteObject(deleteRef).then(() => {
      setIsModal(true);
      setModalContent("Deleted Sucessfully");
      setModalType("remove");
      setTimeout(() => {
        setSetAlert(null);
      }, 4000);
      setIsImageLoading(false);
      setIsAudioLoading(false);
    });
  };

  const uploadImage = (e) => {
    //  isLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setUploadProgress(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },

      (error) => {
        setIsModal(true);
        setModalContent("Something Wrong Please Try again");
        setModalType("remove");
        // isLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setSongImageUrl(downloadUrl);
          setUploadProgress(0);
          // isLoading(false);
          setIsModal(true);
          setModalContent("Image Uploaded Successfully");
          setModalType("add");
          setTimeout(() => {
            setAlert(null);
          }, 4000);
        });
      }
    );
  };

  const uploadSong = (e) => {
    // isLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Audio/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setUploadProgress(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },

      (error) => {
        setIsModal(true);
        setModalContent("Something wents wrong");
        setModalType("remove");
        setTimeout(() => {
          setAlert(null);
        }, 4000);
        // isLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setAudioAsset(downloadUrl);
          console.log(audioAsset);
          console.log(downloadUrl);
          setUploadProgress(0);
          // isLoading(false);
          setIsModal(true);
          setModalContent("Audio Uploaded Successfully");
          setModalType("add");
          setTimeout(() => {
            setAlert(null);
          }, 4000);
        });
      }
    );
  };

  return (
    <>
      <MainAddDiv>
        {isModal && (
          <Modal
            modalContent={modalContent}
            removeModal={removeModal}
            modalType={modalType}
          />
        )}

        <FieldWrapper>
          <SongName
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />
          <AlbumNameInput
            value={albumFilter}
            onChange={(e) => setAlbumFilter(e.target.value)}
          />
          <ArtistNameInput
            value={artistFilter}
            onChange={(e) => setArtistFilter(e.target.value)}
          />
          <LanguageInput
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
          />
          <CatagiryInput
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
          />
        </FieldWrapper>
        <AddWrapper>
          <ImageUploadLabel>
            <ImageUpload>
              <BiCloudUploadIcon />
              <ImgUploadInput onChange={uploadImage} />
              <h5>Upload song image</h5>
            </ImageUpload>
          </ImageUploadLabel>
          <SongUploadLabel>
            <SongUpload>
              <BiCloudUploadIcon />
              <SongUploadInput onChange={uploadSong} />
              <h5>Upload your Song</h5>
            </SongUpload>
          </SongUploadLabel>
        </AddWrapper>
        <UploadWrapper>
          {songImageUrl && <UploadedImage src={songImageUrl} />}
          {songImageUrl && (
            <DeleteIcon
              onClick={() => {
                deleteImageObject(songImageUrl, "image");
              }}
            />
          )}
          {audioAsset && <audio ref={audioRef} src={audioAsset} controls />}
          {audioAsset && (
            <DeleteIcon
              onClick={() => {
                deleteImageObject(audioAsset, "audio");
              }}
            />
          )}
        </UploadWrapper>
        <UploadButton onClick={saveSong}>Upload</UploadButton>
      </MainAddDiv>
    </>
  );
};

export default AddNewSong;
