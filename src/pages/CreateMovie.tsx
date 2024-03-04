import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRef } from "react";
import { useMovie } from "../contexts/MoviesContextProvider";

type Inputs = {
  title: string;
  director: string;
  rating: number;
  genre: string;
  releaseDate: string;
};

const CreateMovie = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const { add_Movie } = useMovie();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("https://crudcrud.com/api/e6df3548c2bd4e0d925c9d788f20a0c5/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((item) => item.json())
      .then((data) => {
        add_Movie(data);
        navigate("/list");
      });
  };
  console.log(register("title", { required: true }));

  const title = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1 ref={title}>Create Movie</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <input
          type="text"
          placeholder="Director"
          {...register("director", { required: true })}
        />
        <input
          type="number"
          placeholder="Rating"
          {...register("rating", { required: true })}
        />
        <input
          type="text"
          placeholder="Genre"
          {...register("genre", { required: true })}
        />
        <input
          type="text"
          placeholder="Release Date"
          {...register("releaseDate", { required: true })}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateMovie;
