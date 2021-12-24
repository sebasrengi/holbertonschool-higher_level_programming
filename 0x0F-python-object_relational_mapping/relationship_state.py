#!/usr/bin/python3

"""
Class definition of State
"""

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship


Base = declarative_base()


class State(Base):
    """ State table """
    __tablename__ = 'states'

    id = Column(Integer, primary_key=True,
                autoincrement=True, nullable=True)
    name = Column(String(128), nullable=False)
    cities = relationship('City')
