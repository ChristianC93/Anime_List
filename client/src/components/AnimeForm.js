import React, { useState } from "react";


function AnimeForm({ user }) {
    const [formData, setFormData] = useState({
        user: user,
        anime: "",
        rating:"",
        review:""
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        }); 
      }
    return (
        <div>
            <form>
                <label>
                    Anime Name:
                    <input type="anime" name="anime" onChange={handleChange} value={formData.anime} />
                </label>
                <br />
                <label>
                    Rating:
                    <input type="rating" name="rating" onChange={handleChange} value={formData.rating} />
                </label>
                <br />
                <label>
                    Review:
                    <input type="review" name="review" onChange={handleChange} value={formData.review} />
                </label>
                <br />
                <input type="submit" value="Add to List" />
            </form>
        </div>
    )
};

export default AnimeForm;