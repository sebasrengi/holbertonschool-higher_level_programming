#!/usr/bin/python3
"""
contains the class City
"""

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from model_state import Base, State

Base = declarative_base()


class City(Base):
    """Representation of a city"""
    __tablename__ = 'cities'
    id = Column('id', Integer, primary_key=True, autoincrement=True,
                unique=True, nullable=False)
    name = Column('name', String(128), nullable=False)
    state_id = Column('state_id', Integer, ForeignKey('states.id'))
