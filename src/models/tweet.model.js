import mongoose from "mongoose";
var Schema = mongoose.Schema;

var answerSchema = new Schema(
  {
    text: String,
    cleanedText: String,
    authorId: String,
    authorUsername: String,
    author: Schema.Types.Mixed,
    publicMetrics: Schema.Types.Mixed,
    id: String,
    editHistoryTweetIds: Schema.Types.Mixed,
    realCreatedAt: Schema.Types.Date,
    attachments: Schema.Types.Mixed,
    contextAnnotations: Schema.Types.Mixed,
    lang: String,
    keyword: String,
    dataset: {
      type: String,
      enum: ["kol", "organization", "person", "company"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export default mongoose.model("tweets", answerSchema);
