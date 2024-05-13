const EventFundRequest = require('../models/EventFundRequest');
const Event = require('../models/event');

const getEventFundRequests = async (req, res) => {
   try {
      const eventFundRequests = await EventFundRequest.find();
      let fundRequests = [];
      for (let i = 0; i < eventFundRequests.length; i++) {
         const event = await Event.findById(eventFundRequests[i].event);
         fundRequests.push({ ...eventFundRequests[i]._doc, eventName: event.name });
      }
      return res.status(200).json(fundRequests);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const getEventFundRequest = async (req, res) => {
   try {
      const { id } = req.params;
      const eventFundRequest = await EventFundRequest.findById(id);
      if (!eventFundRequest) {
         return res.status(404).json({ error: true, message: "EventFundRequest not found" });
      }
      return res.status(200).json(eventFundRequest);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const createEventFundRequest = async (req, res) => {
   try {
      const { event, fundAmount } = req.body;
      const newEventFundRequest = new EventFundRequest({
         event,
         fundAmount,
      });
      const requestedEvent = await Event.findOne({ _id: event });
      if (!requestedEvent) {
         return res.status(404).json({ error: true, message: "Event not found" });
      }
      requestedEvent.fundState = 'PENDING';
      await requestedEvent.save();

      const a = await newEventFundRequest.save();
      return res.status(200).json(a);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const updateEventFundRequest = async (req, res) => {
   try {
      const { id } = req.params;
      const { state } = req.body;
      const eventFundRequest = await EventFundRequest.findById(id);
      if (!eventFundRequest) {
         return res.status(404).json({ error: true, message: "EventFundRequest not found" });
      }

      const event = await Event.findById(eventFundRequest.event);

      if (!event) {
         return res.status(404).json({ error: true, message: "Event not found" });
      }

      event.fundState = state;
      await event.save();

      eventFundRequest.fundState = state;
      await eventFundRequest.save();
      return res.status(200).json({ error: false, message: "EventFundRequest updated successfully" });
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const deleteEventFundRequest = async (req, res) => {
   try {
      const { id } = req.params;
      const eventFundRequest = await EventFundRequest.findById(id);
      if (!eventFundRequest) {
         return res.status(404).json({ error: true, message: "EventFundRequest not found" });
      }
      await eventFundRequest.remove();
      return res.status(200).json({ error: false, message: "EventFundRequest deleted successfully" });
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

module.exports = { getEventFundRequests, getEventFundRequest, createEventFundRequest, updateEventFundRequest, deleteEventFundRequest };