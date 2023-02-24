import React, { useState, useEffect } from "react";
import {
  Button,
  Comment,
  CommentContent,
  CommentGroup,
  Form,
} from "semantic-ui-react";
// import { RiStarSFill } from "react-icons/ri";
import "./CardComment.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { jobSevice } from "./../../../../services/jobService";
import { useSelector } from "react-redux";

export default function CardComment() {
  const [comment, setComment] = useState();
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);
  const { user } = useSelector((state) => state.userSliceLogin.userLogin);
  console.log("user: ", user);

  const { id } = useParams();
  useEffect(() => {
    jobSevice.getClientComment(id).then((data) => {
      if (data.status === 200) setComment(data.data.content[0]);
    });
  }, [id]);

  const onClickHandler = (e) => {
    e.preventDefault();
    jobSevice.createComment({
      maCongViec: id,
      maNguoiBinhLuan: user.id,
      noiDung: value,
    });
  };
  return (
    <div className="my-5">
      <Comment.Group className="pt-20">
        <CommentContent>
          <h1 className="text-2xl font-bold mb-5 text-left">Comment</h1>
        </CommentContent>
        <Comment>
          <CommentContent>
            <div className=" replay-comment">
              <CommentGroup>
                <Comment>
                  <div className="flex my-5">
                    <div><Comment.Avatar className="border rounded-full" src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" /></div>
                    
                    <div className="font-bold mt-8">
                      <Comment.Author>
                        <div className="id-commentator">
                          <p>{user?.id}</p>
                        </div>
                      </Comment.Author>
                    </div>
                  </div>
                  <Comment.Content>
                    <div className="text-left">
                      <Comment.Text>{comment?.noiDung}</Comment.Text>
                    </div>
                    <Comment.Metadata>
                      <div className="text-left text-xs my-2">
                        {comment?.ngayBinhLuan}
                      </div>
                    </Comment.Metadata>
                    <div className="text-left flex">
                      <div>
                        <Comment.Action>
                          <div className="flex">
                            <span>Helpful?</span>
                            <span className="mx-2 my-1">
                              <AiFillLike />
                            </span>
                            <span className="my-1">
                              <AiFillDislike />
                            </span>
                          </div>
                        </Comment.Action>
                      </div>
                      <div className="mx-2">
                        <a href="">Reply</a>
                      </div>
                    </div>
                  </Comment.Content>
                </Comment>
                <Comment className="mx-20">
                  <div className="flex my-5">
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                    <div className="font-bold mt-8">
                      <Comment.Author>
                        <div className="id-commentator">
                          <p>{user?.id}</p>
                        </div>
                      </Comment.Author>
                    </div>
                  </div>
                  <Comment.Content>
                    <div className="text-left">
                      <Comment.Text>{comment?.noiDung}</Comment.Text>
                    </div>
                    <Comment.Metadata>
                      <div className="text-left text-xs my-2">
                        {comment?.ngayBinhLuan}
                      </div>
                    </Comment.Metadata>
                    <div className="text-left flex">
                      <div>
                        <Comment.Action>
                          <div className="flex">
                            <span>Helpful?</span>
                            <span className="mx-2 my-1">
                              <AiFillLike />
                            </span>
                            <span className="my-1">
                              <AiFillDislike />
                            </span>
                          </div>
                        </Comment.Action>
                      </div>
                      <div className="mx-2">
                        <a href="">Reply</a>
                      </div>
                    </div>
                  </Comment.Content>
                </Comment>
              </CommentGroup>
            </div>
          </CommentContent>
        </Comment>
        <div className="text-left">
          {/* {comments.map((text) => (
            <div>{text}</div>
          ))}
          <div>{comment}</div> */}
          <Form>
            <div className="review-area">
              <Form.TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="font-bold text-sm">
              <Button
                onClick={onClickHandler}
                content="Add Comment"
                labelPosition="left"
                // icon="edit"
                primary=""
              />
            </div>
          </Form>
        </div>
      </Comment.Group>
    </div>
  );
}
