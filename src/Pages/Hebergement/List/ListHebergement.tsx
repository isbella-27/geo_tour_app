import React, { useState } from 'react'
import { Hebergement } from '../../../data/models/hebergement'
import { useNavigate } from 'react-router';

const FILTERS = ["Tous les Hébergements", "Hôtels", "Lodges Écologiques", "Auberges", "Stations balnéaires"] as const

export default function ListHebergement() {
    const [hebergements, setHebergements] = useState<Hebergement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous les Hébergements");

    const navigate = useNavigate();

    return (
        <div>ListHebergement</div>
    )
}
