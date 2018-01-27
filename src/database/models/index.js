import { Schema } from 'mongoose';

const db = require('../../database').getDB();

const executionSchema = db.Schema({
  name: String,
  description: String,
  status: String,
  testApi: String,
  executionType: String,
  configuration: Object,
  exception: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

executionSchema.pre('save', function preSave(next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.createdAt) {
    this.createdAt = currentDate;
  }
  next();
});

const suiteSchema = db.Schema({
  name: String,
  description: String,
  requirementId: String,
  status: String,
  configuration: Object,
  exception: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  execution: { type: Schema.Types.ObjectId, ref: 'Execution' },
});

suiteSchema.pre('save', function preSave(next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.createdAt) {
    this.createdAt = currentDate;
  }
  next();
});

const testcaseSchema = db.Schema({
  name: String,
  description: String,
  requirementId: String,
  status: String,
  exception: String,
  configuration: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  suite: { type: Schema.Types.ObjectId, ref: 'Suite' },
});

testcaseSchema.pre('save', function preSave(next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.createdAt) {
    this.createdAt = currentDate;
  }
  next();
});

const teststepSchema = db.Schema({
  name: String,
  description: String,
  status: String,
  exception: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  testcase: { type: Schema.Types.ObjectId, ref: 'Testcase' },
});

teststepSchema.pre('save', function preSave(next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.createdAt) {
    this.createdAt = currentDate;
  }
  next();
});

const Execution = db.model('Execution', executionSchema);
const Suite = db.model('Suite', suiteSchema);
const Testcase = db.model('Testcase', testcaseSchema);
const Teststep = db.model('Teststep', teststepSchema);

module.exports = {
  Execution,
  Suite,
  Testcase,
  Teststep,
};
