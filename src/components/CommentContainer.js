import Comment from "./Comment";

const commentData = [
  {
    name: "Ajay",
    text: "Hello world",
    replies: [
      {
        name: "Ajay",
        text: "Hello world",
        replies: [
          {
            name: "Ajay",
            text: "Hello world",
            replies: [
              {
                name: "Ajay",
                text: "Hello world",
                replies: [
                  {
                    name: "Ajay",
                    text: "Hello world",
                    replies: [
                      {
                        name: "Ajay",
                        text: "Hello world",
                        replies: [],
                      },
                      {
                        name: "Ajay",
                        text: "Hello world",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Ajay",
        text: "Hello world",
        replies: [],
      },
    ],
  },
  {
    name: "Ajay",
    text: "Hello world",
    replies: [],
  },
  {
    name: "Ajay",
    text: "Hello world",
    replies: [],
  },
  {
    name: "Ajay",
    text: "Hello world",
    replies: [],
  },
  {
    name: "Ajay",
    text: "Hello world",
    replies: [],
  },
  {
    name: "Ajay",
    text: "Hello world",
    replies: [],
  },
  
];

const CommentList = ({comments}) => {
  return comments.map((comment,idx) => <div key={idx}>
    <Comment data={comment} />
    <div className="pl-5 border border-l-black ml-5">
      {comment.replies && <CommentList comments={comment.replies}/>}
    </div>
  </div>)
}

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentData}/>
    </div>
  );
};

export default CommentContainer;
