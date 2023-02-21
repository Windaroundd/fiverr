import React from "react";
import {
  Button,
  Comment,
  CommentContent,
  CommentGroup,
  Form,
} from "semantic-ui-react";
import { RiStarSFill } from "react-icons/ri";
import "./CardComment.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
export default function CardComment() {
  return (
    <div className="my-5">
      <Comment.Group className="pt-20">
        <CommentContent>
          <h1 className="text-2xl font-bold mb-5 text-left">Comment</h1>
        </CommentContent>
        <Comment>
          <div className="flex avatar-custom">
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />

            <div className="flex mt-8">
              <div className="custom-info font-bold">
                <Comment.Author>Matt</Comment.Author>
              </div>
              <div>
                <RiStarSFill
                  style={{ color: "orange" }}
                  className="mt-1 mx-1"
                ></RiStarSFill>
              </div>
              <div style={{ color: "orange" }}>5</div>
            </div>
          </div>

          <Comment.Content>
            <Comment.Actions>
              <div className="text-left">
                <Comment.Text>How artistic!</Comment.Text>
              </div>

              <Comment.Metadata>
                <div className="text-xs text-left my-2">Today at 5:42PM</div>
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
            </Comment.Actions>
            <div className="mx-20 replay-comment">
              <CommentGroup>
                <Comment>
                  <div className="flex my-5">
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                    <div className="font-bold mt-8">
                      <Comment.Author as="a">Jenny Hess</Comment.Author>
                    </div>
                  </div>
                  <Comment.Content>
                    <div className="text-left">
                      <Comment.Text>Matt you are always so right</Comment.Text>
                    </div>
                    <Comment.Metadata>
                      <div className="text-left text-xs my-2">Just now</div>
                    </Comment.Metadata>
                  </Comment.Content>
                </Comment>
              </CommentGroup>
            </div>
          </Comment.Content>
        </Comment>
        <div className="text-left">
          <Form reply>
            <div className="review-area">
              <Form.TextArea />
            </div>
            <div className="font-bold text-sm">
              <Button
                content="Add Comment"
                labelPosition="left"
                icon="edit"
                primary=""
              />
            </div>
          </Form>
        </div>
      </Comment.Group>
    </div>
  );
}
