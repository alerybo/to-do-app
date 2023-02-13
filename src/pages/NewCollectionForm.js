import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

import {
  DashboardHeader,
  Input,
  Container,
  TextButton,
} from "../design-system";

const NewCollectionForm = () => {
  const [collectionName, setCollectionName] = useState("");
  const { addCollection } = useGlobalContext();
  const navigate = useNavigate();

  const createHandler = () => {
    addCollection(collectionName);
    navigate(`/collection/${collectionName}`);
  };

  return (
    <div>
      <DashboardHeader>
        <h2>New Collection</h2>
      </DashboardHeader>
      <Container>
        <Input>
          <input
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            placeholder="Collection title"
          ></input>
        </Input>
      </Container>
      <TextButton onClick={createHandler} className="create">
        Create
      </TextButton>
    </div>
  );
};

export default NewCollectionForm;
