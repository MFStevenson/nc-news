import { patchArticleVotes, patchCommentVotes } from "../utils/api";

const VoteButtons = ({ comment_id, article_id, setRenderedVotes, setErr }) => {
  const handleUpVoteClick = () => {
    setRenderedVotes((currVotes) => {
      return currVotes + 1;
    });
    setErr(null);

    if (article_id) {
      patchArticleVotes(article_id, 1).catch((err) => {
        setRenderedVotes((currVotes) => {
          return currVotes - 1;
        });
        setErr("Something went wrong, please try again.");
      });
    } else {
      patchCommentVotes(comment_id, 1).catch((err) => {
        setRenderedVotes((currVotes) => {
          return currVotes - 1;
        });
        setErr("Something went wrong, please try again.");
      });
    }
  };

  const handleDownVoteClick = () => {
    setRenderedVotes((currVotes) => {
      return currVotes - 1;
    });
    setErr(null);

    if (article_id) {
      patchArticleVotes(article_id, -1).catch((err) => {
        setRenderedVotes((currVotes) => {
          return currVotes + 1;
        });
        setErr("Something went wrong, please try again.");
      });
    } else {
      patchCommentVotes(comment_id, -1).catch((err) => {
        setRenderedVotes((currVotes) => {
          return currVotes + 1;
        });
        setErr("Something went wrong, please try again.");
      });
    }
  };
  return (
    <>
      <button aria-label="up vote" onClick={handleUpVoteClick}>
        +1
      </button>
      <button aria-label="down vote" onClick={handleDownVoteClick}>
        -1
      </button>
    </>
  );
};

export default VoteButtons;
