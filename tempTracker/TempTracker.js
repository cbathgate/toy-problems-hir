var TempTracker = function() {
  // min and max
  this.min = null;
  this.max = null;

  // temperatures with counters
  this.temperatures = {};

  // mean
  this.total = 0;
  this.size = 0;

  // mode
  this.mode = null;
  this.modeAmount = 0;
}

TempTracker.prototype.insert = function(temperature) {

  // if temperature is not in our temperatures object,
  // initialize with counter at 1
  if (!this.temperatures[temperature]) {
    this.temperatures[temperature] = 1;
  } else {
    this.temperatures[temperature]++;
  }

  // if no mode, set first value as mode
  if (!this.mode) {
    this.mode = temperature;
    this.modeAmount = 1;
  }
  if (this.temperatures[temperature] > this.modeAmount) {
    this.mode = temperature;
    this.modeAmount = this.temperatures[temperature]; 
  }

  // set the min and max
  if (!this.min || this.min > temperature) {
    this.min = temperature;
  }

  if (!this.max || this.max < temperature) {
    this.max = temperature;
  }

  // values relating to mean
  this.total += temperature;
  this.size++;
}

TempTracker.prototype.getMax = function() {
  return this.max;
}

TempTracker.prototype.getMin = function() {
  return this.min;
}

TempTracker.prototype.getMean = function() {
  return this.total / this.size;
}

TempTracker.prototype.getMode = function() {
  return this.mode;
}


// var tracker = new TempTracker();

// tracker.insert(30);
// tracker.insert(30);
// tracker.insert(50);
// tracker.insert(50);
// tracker.insert(20);
// tracker.getMode();
// tracker.getMin();
// tracker.getMax();


